import React from 'react';

const CategoryFilter = ({ onChange }) => (
  <div>
    <label htmlFor="world">World</label>
    <input type="radio" name="category" id="world" onChange={ onChange } />
    <label htmlFor="financial">Financial</label>
    <input type="radio" name="category" id="financial" onChange={ onChange } />
    <label htmlFor="technology">Technology</label>
    <input type="radio" name="category" id="technology" onChange={ onChange } />
  </div>
);

export default CategoryFilter;
