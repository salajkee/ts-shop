import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import './style.scss';

interface HeaderSearchProps {
  handleSearch: (title: string) => void;
}

const HeaderSearch = ({ handleSearch }: HeaderSearchProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    handleSearch(value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="header__search">
      <input
        className="header__search-input"
        type="search"
        placeholder="Найти товар"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="header__search-btn" onClick={handleSubmit}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default HeaderSearch;
