import React from 'react';
import PropTypes from 'prop-types';
import './paper.css';

const PaperMSS = ({ backgroundColor, shadowSize, children }) => {
    return (
        <div className={`paper paper-${shadowSize}`} style={{ backgroundColor }}>{ children }</div>
    );
};

PaperMSS.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    shadowSize: PropTypes.oneOf([ 'small', 'medium', 'large' ]).isRequired,
    children: PropTypes.node
};

export default PaperMSS;
