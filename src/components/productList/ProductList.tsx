import { ProductsType, ProductType } from '../../types/products';
import ProductItem from '../productItem/ProductItem';
import './style.scss';

interface ProductItemsProps {
  products: ProductsType;
  fav: ProductsType;
  addCart: (item: ProductType) => void;
  toggleFav: (item: ProductType) => void;
}

const ProductList = ({
  products,
  addCart,
  toggleFav,
  fav,
}: ProductItemsProps) => {
  return (
    <ul className="product__list">
      {products.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
          addCart={addCart}
          toggleFav={toggleFav}
          fav={fav}
        />
      ))}
    </ul>
  );
};

export default ProductList;
