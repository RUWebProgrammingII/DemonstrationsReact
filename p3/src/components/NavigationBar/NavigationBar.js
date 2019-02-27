import React from 'react';
import User from '../User/User';
import NavLinks from '../NavLinks/NavLinks';
import { ThemeConsumer } from '../../context/ThemeContext';

const NavigationBar = () => {
    return (
        <ThemeConsumer>
            {
                themeContext =>
                    <nav className={ `navbar navbar-expand-lg navbar-${ themeContext.current } bg-${ themeContext.current }` }>
                        <NavLinks />
                        <User />
                    </nav>
            }
        </ThemeConsumer>
    )
};

export default NavigationBar;
