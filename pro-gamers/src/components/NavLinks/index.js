import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <ul className="nav-links">
    <li>
      <NavLink
        exact
        to="/"
        className="navigation-link">News</NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/topgames"
        className="navigation-link">Top 10 Games</NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/signup"
        className="navigation-link">Signup now!</NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/about"
        className="navigation-link">About</NavLink>
    </li>
  </ul>
);

export default NavLinks;
