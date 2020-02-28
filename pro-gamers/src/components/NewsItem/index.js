import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ id, title, shortDescription, category, onEdit, onDelete }) => (
  <div className="card card-body bg-light news-item">
    <h3><Link to={`/${id}`}>{ title }</Link></h3>
    <p>{ shortDescription }</p>
    <p>{ category }</p>
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-primary"
        onClick={ () => onEdit({ id, title, shortDescription, category }) }>Edit</button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={ () => onDelete(id) }>Delete</button>
    </div>
  </div>
);

export default NewsItem;
