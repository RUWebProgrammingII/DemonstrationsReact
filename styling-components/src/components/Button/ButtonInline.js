import React from 'react';
import PropTypes from 'prop-types';
import './button.inline.css';

const styles = {
    base: {
        padding: 10,
        boxShadow: '5px 5px 5px 5px rgba(155, 155, 155, .5)',
        borderBottomStyle: 'solid',
        borderBottomWidth: 3,
        success: {
            backgroundColor: 'green',
            borderBottomColor: 'darkgreen'
        },
        warning: {
            backgroundColor: 'orange',
            borderBottomColor: 'darkorange'
        },
        danger: {
            backgroundColor: 'red',
            borderBottomColor: 'darkred'
        }
    }
};

const ButtonInline = ({ onClick, type, children }) => {
    return (
        <button
            className="btn"
            type="button"
            style={{ ...styles.base, ...styles.base[type] }}
            onClick={e => onClick(e)}>{ children }</button>
    );
};

ButtonInline.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf([ 'success', 'warning', 'danger' ]).isRequired,
    children: PropTypes.node
};

export default ButtonInline;
