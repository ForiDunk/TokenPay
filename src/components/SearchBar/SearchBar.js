import React from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from './search.svg';
import { isBrowser } from 'react-device-detect';

const SearchBar = () => (
  <div className={`seach-bar ${isBrowser ? 'search-bar--desktop' : ''}`}>
    <SearchIcon className="search-icon" />
    <input type="text" placeholder="Search height, hash, tx hash or address…" />
    {isBrowser ? <button className="search-bar__button">Search</button> : null}
  </div>
);

export default SearchBar;
