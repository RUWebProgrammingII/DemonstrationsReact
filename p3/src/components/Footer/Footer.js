import React from 'react';
import { UserConsumer } from '../../context/UserContext';
import { ThemeConsumer } from '../../context/ThemeContext';
import User from '../User/User';

const users = [
    {
        userName: 'heatman',
        fullName: 'Heatman'
    },
    {
        userName: 'guybrush',
        fullName: 'Guybrush Threepwood'
    },
    {
        userName: 'larry',
        fullName: 'Larry Laffer'
    },
    {
        userName: 'arnar',
        fullName: 'Arnar Leifsson'
    },
    {
        userName: 'squall',
        fullName: 'Squall Lionheart'
    }
]

const Footer = () => {
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <UserConsumer>
                            {
                                userContext =>
                                    <footer className={`navbar fixed-bottom navbar-${ themeContext.current } bg-${ themeContext.current }`}>
                                        <User />
                                        <button type="button" className="btn btn-primary" onClick={() => userContext.updateUser(users[Math.floor(Math.random() * users.length)]) }>Update user</button>
                                        <button type="button" className="btn btn-primary" onClick={() =>
                                        themeContext.toggleTheme()}>Toggle theme</button>
                                    </footer>
                            }
                        </UserConsumer>
                    );
                }
            }
        </ThemeConsumer>
    );
};

export default Footer;
