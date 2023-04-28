import { Link } from 'react-router-dom';
import { ProductsType, ProductType } from '../../types/products';
import { ReactComponent as FavIcon } from '../../assets/icons/favorite.svg';
import { ReactComponent as FavedIcon } from '../../assets/icons/favorited.svg';
import './style.scss';

interface ProductItemProps {
  item: ProductType;
  fav: ProductsType;
  addCart: (item: ProductType) => void;
  toggleFav: (item: ProductType) => void;
}

const ProductItem = ({ item, addCart, toggleFav, fav }: ProductItemProps) => {
  return (
    <li>
      <div className="product__item">
        <div className="product__item-fav" onClick={() => toggleFav(item)}>
          {fav.filter((el) => el.id === item.id).length ? (
            <FavedIcon />
          ) : (
            <FavIcon />
          )}
        </div>
        <div className="product__item-img">
          <img src={item.images[0]} alt="img" />
        </div>
        <Link className="product__item-title" to={`/products/${item.id}`}>
          {item.title}
        </Link>
        <span className="product__item-price">{item.price} $</span>
        <button className="product__item-btn" onClick={() => addCart(item)}>
          В корзину
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
