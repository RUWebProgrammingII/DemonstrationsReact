import React from 'react';
import { connect } from 'react-redux';

const About = ({ translations }) => {
    const { title, description } = translations;
    return (
        <div>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </div>
    )
};

const mapStateToProps = reduxState => {
    return {
        translations: reduxState.language.about
    };
};

export default connect(mapStateToProps)(About);
