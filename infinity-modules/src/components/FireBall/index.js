import React from 'react';
import PropTypes from 'prop-types';
import styles from './fireball.module.css';

const FireBall = ({ size }) => {
    return <div className={`${styles.fireball} ${styles[size]}`}></div>
};

FireBall.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ])
};

FireBall.defaultProps = {
    size: 'medium'
};

export default FireBall;
