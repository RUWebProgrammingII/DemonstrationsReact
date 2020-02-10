import React from 'react';
import NewsItem from '../NewsItem';

const NewsList = ({ news, editItem, removeItem }) => (
  <div>
    { news.map(n => <NewsItem
      key={ n.id }
      editItem={ editItem }
      removeItem={ removeItem }
      id={ n.id }
      title={ n.title }
      shortDescription={ n.shortDescription }
      category={ n.category } />) }
  </div>
);

export default NewsList;
