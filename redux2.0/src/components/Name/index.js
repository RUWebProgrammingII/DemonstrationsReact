import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeUser } from '../../actions/userActions';

const Name = ({ changeUser }) => {
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState(0);

  return (
    <form action="">
      <input
        type="text"
        className="form-control"
        value={ name }
        onChange={ e => setName(e.target.value) } />
      <input
        type="number"
        className="form-control"
        value={ age }
        onChange={ e => setAge(e.target.value) } />
      <button onClick={ e => {
        e.preventDefault();
        changeUser(name, age);
      } }>
        Submit
      </button>
    </form>
  )
}

export default connect(null, { changeUser })(Name);
