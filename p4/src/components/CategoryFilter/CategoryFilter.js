import React from 'react';

const CategoryFilter = (props) => {
    return (
        <div>
            <input
                type="radio"
                name="category"
                id="world"
                value="world"
                onChange={props.onChange} />
            <label htmlFor="world">World</label>

            <input
                type="radio"
                name="category"
                id="financial"
                value="financial"
                onChange={props.onChange} />
            <label htmlFor="financial">Financial</label>

            <input
                type="radio"
                name="category"
                id="technology"
                value="technology"
                onChange={props.onChange} />
            <label htmlFor="technology">Technology</label>
        </div>
    );
};

export default CategoryFilter;
