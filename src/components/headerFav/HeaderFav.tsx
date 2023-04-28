import { Link } from 'react-router-dom';
import { ReactComponent as FavIcon } from '../../assets/icons/favorite.svg';
import './style.scss';

interface HeaderFavProps {
  favQuantity: number;
}

const HeaderFav = ({ favQuantity = 0 }: HeaderFavProps) => {
  return (
    <Link className="header__fav" to="/favorites">
      <FavIcon />
      <p className="header__fav-text">Избранное</p>
      <span className="header__fav-count">{favQuantity}</span>
    </Link>
  );
};

export default HeaderFav;
