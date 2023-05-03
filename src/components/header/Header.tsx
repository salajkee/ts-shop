import { Link } from 'react-router-dom';
import HeaderCart from '../headerCart/HeaderCart';
import HeaderFav from '../headerFav/HeaderFav';
import HeaderSearch from '../headerSearch/HeaderSearch';
import { ReactComponent as LoginIcon } from '../../assets/icons/login.svg';
import './style.scss';

interface HeaderProps {
  cartQuantity: number;
  favQuantity: number;
  handleSearch: (title: string) => void;
}

const Header = ({ cartQuantity, favQuantity, handleSearch }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/">
            React Shop
          </Link>
          <div className="header__inner">
            <HeaderSearch handleSearch={handleSearch} />
            <HeaderFav favQuantity={favQuantity} />
            <HeaderCart cartQuantity={cartQuantity} />
            <button className="header__login">
              Войти
              <LoginIcon className="icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
