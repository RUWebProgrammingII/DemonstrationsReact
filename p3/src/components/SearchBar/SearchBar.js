import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder="Search here.." onInput={props.onInput} />
        </div>
    );
};

export default SearchBar;
