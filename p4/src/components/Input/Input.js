import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { value, onInput, type, errorMessage, label, name, htmlId } = props;
  return (
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
};

Input.propTypes = {
  /* The value provided to the input HTML tag */
  value: PropTypes.string.isRequired,
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  type: PropTypes.oneOf([ 'text', 'password', 'submit', 'email', 'file' ]),
  errorMessage: PropTypes.string,
  label: PropTypes.string
};

export default Input;
