import React from 'react';

const CounterWrapper = (props) => {
    return (
        <div className="container">{props.children}</div>
    );
};

export default CounterWrapper;
