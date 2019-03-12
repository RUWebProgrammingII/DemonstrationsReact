import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/languageActions';

const ChangeLanguage = props => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-default" onClick={ () => props.changeLanguage('is') }>IS</button>
            <button type="button" className="btn btn-default" onClick={ () => props.changeLanguage('en') }>EN</button>
        </div>
    );
};

export default connect(null, { changeLanguage })(ChangeLanguage);
