import React from 'react';
import { connect } from 'react-redux';

const Header = ({ counter, user, weather }) => {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">{ counter } - { user.name } - { user.age } - { weather }°C</nav>;
};

const mapStateToProps = ({ counter, user, weather }) => {
  return {
    counter,
    user,
    weather
  };
};

export default connect(mapStateToProps)(Header);
