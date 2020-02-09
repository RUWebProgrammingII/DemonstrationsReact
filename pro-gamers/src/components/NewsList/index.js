import React from 'react';
import NewsItem from '../NewsItem';

const NewsList = ({ news }) => (
  <div>
    { news.map(n => <NewsItem
      key={ n.id }
      title={ n.title }
      shortDescription={ n.shortDescription }
      category={ n.category } />) }
  </div>
);

export default NewsList;
