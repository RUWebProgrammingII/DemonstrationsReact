import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../../actions/counterActions';

const Counter = ({ incrementCounter }) => {
  const [ counter, setCounter ] = useState(0);
  return (
    <>
      <p>Current counter is: { counter }</p>
      <button className="btn btn-primary" onClick={ () => {
        setCounter(counter + 1);
        incrementCounter(counter + 1);
      } }>Increase counter</button>
    </>
  )
};

export default connect(null, { incrementCounter })(Counter);
