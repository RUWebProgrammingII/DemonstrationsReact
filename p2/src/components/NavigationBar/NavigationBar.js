import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import User from '../User/User';
import { ThemeConsumer } from '../../context/ThemeContext';

const NavigationBar = () => {
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <nav className={`navbar navbar-expand-lg navbar-${themeContext.current} bg-${themeContext.current}`}>
                            <NavLinks />
                            <User />
                        </nav>
                    )
                }
            }
        </ThemeConsumer>
    )
};

export default NavigationBar;
