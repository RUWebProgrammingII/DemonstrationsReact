import React from 'react';
import User from '../User/User';
import NavLinks from '../NavLinks/NavLinks';
import { ThemeConsumer } from '../../context/ThemeContext';
import { changeLanguage } from '../../actions/languageActions';
import { connect } from 'react-redux';

const NavigationBar = props => {
    const { changeLanguage } = props;
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <nav className={`navbar navbar-expand-lg navbar-${themeContext.current} bg-${themeContext.current}`}>
                            <NavLinks />
                            <div className="btn-group">
                              <button type="button" className="btn btn-default" onClick={() => changeLanguage('is')}>IS</button>
                              <button type="button" className="btn btn-default" onClick={() => changeLanguage('en')}>EN</button>
                            </div>
                            <User />
                        </nav>
                    )
                }
            }
        </ThemeConsumer>
    )
};

export default connect(null, { changeLanguage })(NavigationBar);
