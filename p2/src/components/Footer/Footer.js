import React from 'react';
import { UserConsumer } from '../../context/UserContext';
import { ThemeConsumer } from '../../context/ThemeContext';
import User from '../User/User';

const Footer = () => {
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <UserConsumer>
                            { userContext => {
                                return <footer className={ `navbar navbar-expand-lg navbar-fixed-bottom navbar-${themeContext.current} bg-${themeContext.current}` }>
                                    <User />
                                    <button type="button" onClick={() => userContext.changeUser({ username: 'jonb', fullName: 'Jon' })} className="btn btn-primary">Update User</button>
                                    <button type="button" onClick={() => themeContext.toggleTheme()} className="btn btn-primary">Toggle theme</button>
                                </footer>
                            } }
                        </UserConsumer>
                    )
                }
            }

        </ThemeConsumer>
    )
};

export default Footer;
