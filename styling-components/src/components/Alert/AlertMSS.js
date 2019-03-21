import React from 'react';
import PropTypes from 'prop-types';
import './alert.css';

const AlertMSS = ({ type, message, title }) => {
    return (
        <div className={`alert alert-${type}`}>
            <div className="title">{ title }</div>
            <div className="message">{ message }</div>
        </div>
    )
};

AlertMSS.propTypes = {
    type: PropTypes.oneOf([ 'info', 'warning', 'success', 'danger' ]).isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default AlertMSS;
