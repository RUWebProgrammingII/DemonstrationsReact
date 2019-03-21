import React from 'react';
import PropTypes from 'prop-types';
import styles from './avatar.module.css';

const AvatarMSS = ({ size, avatarUrl }) => {
    return (
        <div className={ styles[size] } style={{ backgroundImage: `url(${avatarUrl})`  }}></div>
    );
};

AvatarMSS.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]).isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default AvatarMSS;
