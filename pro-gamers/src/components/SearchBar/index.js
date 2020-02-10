import React from 'react';

const SearchBar = ({ value, changeFn }) => (
  <div className="form-group">
    <input
      placeholder="Search for news item.."
      value={ value }
      onChange={ changeFn }
      type="text"
      className="form-control" />
  </div>
);

export default SearchBar;
