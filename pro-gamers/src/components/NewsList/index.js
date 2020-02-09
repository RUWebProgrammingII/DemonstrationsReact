import React from 'react';
import NewsItem from '../NewsItem';

const NewsList = ({ news, editItem, deleteItem }) => (
  <div>
    { news.map(n => <NewsItem
      key={ n.id }
      id={ n.id }
      title={ n.title }
      shortDescription={ n.shortDescription }
      onEdit={ editItem }
      onDelete={ deleteItem }
      category={ n.category } />) }
  </div>
);

export default NewsList;
