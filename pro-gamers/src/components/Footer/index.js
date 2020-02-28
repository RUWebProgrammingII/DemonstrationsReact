import React from 'react';
import { UserConsumer } from '../../context/userContext';
import { ThemeConsumer } from '../../context/themeContext';
import User from '../User';

const Footer = () => (
  <ThemeConsumer>
    {
      themeContext => (
        <UserConsumer>
          {
            userContext => {
              return (
                <footer className={ `navbar navbar-expand-lg fixed-bottom bg-${ themeContext.current }` }>
                  <User />
                  <button
                    type="button"
                    onClick={ () => userContext.changeUser({ username: 'jonb', fullName: 'Jón' }) }
                    className="btn btn-primary">
                    Update user
                  </button>
                  <button
                    type="button"
                    onClick={ () => themeContext.toggleTheme() }
                    className="btn btn-primary">
                    Toggle theme
                  </button>
                </footer>
              )
            }
          }
        </UserConsumer>
      )
    }
  </ThemeConsumer>
);

export default Footer;
