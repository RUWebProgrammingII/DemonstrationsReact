import React from 'react';
import PropTypes from 'prop-types';

const BASE_SIZE = 100;

const styles = {
    base: {
        display: 'inline-block',
        borderRadius: '50%',
        padding: 10,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        border: 'dashed 1px darkgray',
        small: {
            width: BASE_SIZE,
            height: BASE_SIZE
        },
        medium: {
            width: BASE_SIZE * 2,
            height: BASE_SIZE * 2
        },
        large: {
            width: BASE_SIZE * 3,
            height: BASE_SIZE * 3
        }
    }
}

const AvatarInline = ({ size, avatarUrl }) => {
    return (
        <div style={{ ...styles.base, ...styles.base[size], backgroundImage: `url(${avatarUrl})` }}></div>
    );
};

AvatarInline.propTypes = {
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]).isRequired,
    avatarUrl: PropTypes.string.isRequired
};

export default AvatarInline;
