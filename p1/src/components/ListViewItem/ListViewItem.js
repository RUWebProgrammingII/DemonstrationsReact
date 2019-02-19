import React from 'react';

const ListViewItem = (props) => {
    return (
        <li className="list-view-item">
            <h3>{props.newsItem.title}</h3>
            <p>{props.newsItem.shortDescription}</p>
            <p>{props.newsItem.category}</p>
        </li>    
    );
};

export default ListViewItem;
