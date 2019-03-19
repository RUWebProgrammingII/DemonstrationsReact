import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
    base: {
        padding: 20,
        margin: '20px 0',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        small: {
            boxShadow: '5px 5px 5px rgba(155, 155, 155, .5)'
        },
        medium: {
            boxShadow: '10px 10px 5px rgba(155, 155, 155, .5)'
        },
        large: {
            boxShadow: '15px 15px 5px rgba(155, 155, 155, .5)'
        }
    }
};

const PaperRadium = ({ backgroundColor, shadowSize, children }) => {
    return (
        <div style={[ styles.base, styles.base[shadowSize], { backgroundColor } ]}>{ children }</div>
    );
};

PaperRadium.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    shadowSize: PropTypes.oneOf([ 'small', 'medium', 'large' ]).isRequired,
    children: PropTypes.node
};

export default Radium(PaperRadium);
