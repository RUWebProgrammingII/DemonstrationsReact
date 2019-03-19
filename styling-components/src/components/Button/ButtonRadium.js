import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const tiltRightAndLeft = Radium.keyframes({
    from: {
        left: -10
    },
    to: {
        left: 10
    }
});

const styles = {
    base: {
        position: 'relative',
        padding: 10,
        boxShadow: '5px 5px 5px 5px rgba(155, 155, 155, .5)',
        borderBottomStyle: 'solid',
        borderBottomWidth: 3,
        animation: 'x 1s linear alternate infinite',
        animationName: tiltRightAndLeft,
        ':hover': {
            opacity: '.5'
        },
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

const ButtonRadium = ({ onClick, type, children }) => {
    return (
        <button
            type="button"
            style={[ styles.base, styles.base[type] ]}
            onClick={e => onClick(e)}>{ children }</button>
    );
};

ButtonRadium.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf([ 'success', 'warning', 'danger' ]).isRequired,
    children: PropTypes.node
};

export default Radium(ButtonRadium);
