import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import './style.scss';

const HeaderSearch = () => {
  return (
    <div className="header__search">
      <input
        className="header__search-input"
        type="text"
        name="search"
        placeholder="Найти товар"
      />
      <label className="header__search-label" htmlFor="search">
        <SearchIcon />
      </label>
    </div>
  );
};

export default HeaderSearch;
