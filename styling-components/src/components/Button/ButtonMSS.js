import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const ButtonMSS = ({ onClick, type, children }) => {
    return (
        <button
            className={`btn btn-${type}`}
            type="button"
            onClick={e => onClick(e)}>{ children }</button>
    );
};

ButtonMSS.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf([ 'success', 'warning', 'danger' ]).isRequired,
    children: PropTypes.node
};

export default ButtonMSS;
