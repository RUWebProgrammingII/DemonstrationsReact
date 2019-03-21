import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const AvatarMSS = ({ size, avatarUrl }) => {
    return (
        <div className={`avatar avatar-${size}`} style={{ backgroundImage: `url(${avatarUrl})`  }}></div>
    );
};

AvatarMSS.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]).isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default AvatarMSS;
