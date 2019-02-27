import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">News</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/topgames" className="nav-link">Top 10 Games</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
