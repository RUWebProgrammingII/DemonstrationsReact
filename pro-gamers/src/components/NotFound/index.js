import React from 'react';

const NotFound = ({ location }) => (
  <div className="not-found">
    <h1>404!</h1>
    <p>The resource at { location.path } was not found.</p>
  </div>
);

export default NotFound;
