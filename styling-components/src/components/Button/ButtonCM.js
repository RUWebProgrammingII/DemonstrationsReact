import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const ButtonCM = ({ onClick, type, children }) => {
    return (
        <button
          className={ styles[type] }
            type="button"
            onClick={e => onClick(e)}>{ children }</button>
    );
};

ButtonCM.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf([ 'success', 'warning', 'danger' ]).isRequired,
    children: PropTypes.node
};

export default ButtonCM;
