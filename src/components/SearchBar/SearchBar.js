import React from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from './search.svg';

const SearchBar = () => (
  <div className="seach-bar">
    <SearchIcon className="search-icon" />
    <input type="text" placeholder="Search height, hash, tx hash or address…" />
  </div>
);

export default SearchBar;
