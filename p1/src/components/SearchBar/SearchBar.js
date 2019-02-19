import React from 'react';

const SearchBar = (props) => {
    return (
        <input className="input input-big" type="text" onInput={props.onInput} />
    );
};

export default SearchBar;
