import React from 'react';
import PropTypes from 'prop-types';
import styles from './alert.module.css';

const AlertCM = ({ type, message, title }) => {
    return (
        <div className={ styles[type] }>
            <div className={ styles.title }>{ title }</div>
            <div className={ styles.message }>{ message }</div>
        </div>
    )
};

AlertCM.propTypes = {
    type: PropTypes.oneOf([ 'info', 'warning', 'success', 'danger' ]).isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default AlertCM;
