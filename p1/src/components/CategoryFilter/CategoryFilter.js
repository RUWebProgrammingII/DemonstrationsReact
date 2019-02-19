import React from 'react';

const CategoryFilter = (props) => {
    return (
        <div>
            <label for="world">World</label>
            <input type="radio" name="category" id="world" onChange={props.onChange} />
            <label for="financial">Financial</label>
            <input type="radio" name="category" id="financial" onChange={props.onChange} />
            <label for="technology">Technology</label>
            <input type="radio" name="category" id="technology" onChange={props.onChange} />
        </div>
    );
};

export default CategoryFilter;
