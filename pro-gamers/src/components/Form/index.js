import React from 'react';

const Form = ({ onSubmit, children }) => (
  <form onSubmit={ onSubmit } className="form form-horizontal">
    { children }
  </form>
);

export default Form;
