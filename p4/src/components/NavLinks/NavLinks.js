import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavLinks = props => {
    const { news, top10Games, about, signup, profile } = props.translations;
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">{ news }</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/topgames" className="nav-link">{ top10Games }</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">{ about }</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/signup" className="nav-link">{ signup }</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/profile" className="nav-link">{ profile }</NavLink>
            </li>
        </ul>
    );
};

const mapStateToProps = reduxStoreState => {
  return {
    translations: reduxStoreState.language.navigationLinks
  };
};

export default connect(mapStateToProps)(NavLinks);
