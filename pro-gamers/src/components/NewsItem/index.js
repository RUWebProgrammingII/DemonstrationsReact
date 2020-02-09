import React from 'react';

const NewsItem = ({ title, shortDescription, category }) => (
  <div className="card card-body bg-light news-item">
    <h3>{ title }</h3>
    <p>{ shortDescription }</p>
    <p>{ category }</p>
  </div>
);

export default NewsItem;
