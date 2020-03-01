import React from 'react';
import { connect } from 'react-redux';

const Header = ({ counter, user, currentDegree }) => (
  <nav className="navbar-custom">
    <p>Current counter is: { counter }</p>
    <p>Current degree is: { currentDegree }°C</p>
    {
      Object.keys(user).length > 0
      ?
      <p>Name: { user.name }, Age: { user.age }</p>
      :
      <></>
    }
  </nav>
);

const mapStateToProps = reduxStoreState => {
  return {
    counter: reduxStoreState.counter,
    user: reduxStoreState.user,
    currentDegree: reduxStoreState.weather,
  };
};

export default connect(mapStateToProps)(Header);
