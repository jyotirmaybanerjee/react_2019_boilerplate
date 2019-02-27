import React from 'react';
import './styles/search.scss';

export const Search = () => {
    return (
      <div className="searchbar">
        <input className="search_input" type="text" name="" placeholder="Search..." />
        <a href="#" className="search_icon"><i className="fas fa-search" /></a>
      </div>
    );
}
