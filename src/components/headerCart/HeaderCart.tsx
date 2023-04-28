import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import './style.scss';

interface HeaderCartProps {
  cartQuantity: number;
}

const HeaderCart = ({ cartQuantity = 0 }: HeaderCartProps) => {
  return (
    <Link className="header__cart" to="/cart">
      <CartIcon />
      <p className="header__cart-text">Корзина</p>
      <span className="header__cart-count">{cartQuantity}</span>
    </Link>
  );
};

export default HeaderCart;
