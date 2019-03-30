import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import './index.css';

const FireBall = ({ size }) => {
    return <div className="fireball" style={ { ...styles.base, ...styles[size] } }></div>;
};

FireBall.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ])
};

FireBall.defaultProps = {
    size: 'medium'
};

export default FireBall;
