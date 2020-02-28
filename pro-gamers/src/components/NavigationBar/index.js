import React from 'react';
import NavLinks from '../NavLinks';
import User from '../User';
import { ThemeConsumer } from '../../context/themeContext';

const NavigationBar = () => (
  <ThemeConsumer>
    {
      themeContext => {
        return (
          <nav className={ `navbar navbar-light bg-${themeContext.current}` }>
            <NavLinks />
            <User />
          </nav>
        );
      }
    }
  </ThemeConsumer>
);

export default NavigationBar;
