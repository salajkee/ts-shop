import { useState } from 'react';
import ProductList from '../components/productList/ProductList';
import Pagination from '../components/pagination/Pagination';
import { ProductsType, ProductType } from '../types/products';

interface HomeProps {
  products: ProductsType;
  fav: ProductsType;
  addCart: (item: ProductType) => void;
  toggleFav: (item: ProductType) => void;
}

const Home = ({ products, addCart, toggleFav, fav }: HomeProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <main>
      <div className="container">
        <h1 className="title">Все товары</h1>
        <ProductList
          products={currentPosts}
          addCart={addCart}
          toggleFav={toggleFav}
          fav={fav}
        />
        <Pagination
          totalPosts={products.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </main>
  );
};

export default Home;
