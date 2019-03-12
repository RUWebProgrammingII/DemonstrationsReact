import React from 'react';
import User from '../User/User';
import NavLinks from '../NavLinks/NavLinks';
import { ThemeConsumer } from '../../context/ThemeContext';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';

const NavigationBar = () => {
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <nav className={`navbar navbar-expand-lg navbar-${themeContext.current} bg-${themeContext.current}`}>
                            <NavLinks />
                            <ChangeLanguage />
                            <User />
                        </nav>
                    )
                }
            }
        </ThemeConsumer>
    )
};

export default NavigationBar;
