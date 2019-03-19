import React from 'react';
import PropTypes from 'prop-types';
import styles from './AlertInline.styles.js';

const AlertInline = ({ type, message, title }) => {
    return (
        <div style={{ ...styles.base, ...styles.base[type] }}>
            <div style={{ ...styles.title }}>{ title }</div>
            <div style={{ ...styles.message }}>{ message }</div>
        </div>
    )
};

AlertInline.propTypes = {
    type: PropTypes.oneOf([ 'info', 'warning', 'success', 'danger' ]).isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default AlertInline;
