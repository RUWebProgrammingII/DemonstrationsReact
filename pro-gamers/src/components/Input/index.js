import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onInput, type, errorMessage, label, name, htmlId }) => (
  <div className="form-group">
    {
      label
      ?
      <label htmlFor={ htmlId } className="control-label">{ label }</label>
      :
      <></>
    }
    <input
      type={ type }
      value={ value }
      onChange={ onInput }
      name={ name }
      id={ htmlId }
      className="form-control" />
    <span className="error">{ errorMessage }</span>
  </div>
);

Input.propTypes = {
  /* The value provided to the input HTML tag */
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  type: PropTypes.oneOf([ 'text', 'password', 'submit', 'email', 'number' ]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
}

export default Input;
