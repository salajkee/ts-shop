import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import { ProductsType, ProductType } from '../types/products';

interface ProductPageProps {
  fav: ProductsType;
  addCart: (item: ProductType) => void;
  toggleFav: (item: ProductType) => void;
}

const ProductPage = ({ addCart, fav, toggleFav }: ProductPageProps) => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const response = await axios.get(url);
      const data = {
        ...response.data,
        quantity: 1,
      };
      setProductData(data);
    };

    fetchData(`https://api.escuelajs.co/api/v1/products/${id}`);
  }, [id]);

  return (
    <main>
      <div className="container">
        <SingleProduct
          productData={productData}
          setProductData={setProductData}
          addCart={addCart}
          fav={fav}
          toggleFav={toggleFav}
        />
      </div>
    </main>
  );
};

export default ProductPage;
