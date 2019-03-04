import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ListViewItem.propTypes = {
	newsItem: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		shortDescription: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired
	}).isRequired
};

ListViewItem.defaultProps = {
	newsItem: {
		id: 1,
		title: 'News item',
		shortDescription: 'I am short',
		category: 'no-category'
	}
}

export default ListViewItem;
