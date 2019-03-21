import React from 'react';
import PropTypes from 'prop-types';
import styles from './paper.module.css';

const PaperCM = ({ backgroundColor, shadowSize, children }) => {
    return (
        <div className={ styles[shadowSize] } style={{ backgroundColor }}>{ children }</div>
    );
};

PaperCM.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    shadowSize: PropTypes.oneOf([ 'small', 'medium', 'large' ]).isRequired,
    children: PropTypes.node
};

export default PaperCM;
