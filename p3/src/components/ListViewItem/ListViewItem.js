import React from 'react';
import { Link } from 'react-router-dom';

const ListViewItem = (props) => {
	return (
        <li className="card border-dark mb-3">
    		<div className="card-header">{props.newsItem.category}</div>
    		<div className="card-body">
    			<h4 className="card-title"><Link to={ "/" + props.newsItem.id }>{props.newsItem.title}</Link></h4>
    			<p className="card-text">{props.newsItem.shortDescription}</p>
    		</div>
    	</li>
    );
};

export default ListViewItem;
