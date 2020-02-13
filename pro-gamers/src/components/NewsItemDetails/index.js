import React from 'react';
import { getNewsById } from '../../services/newsService';

class NewsItemDetails extends React.Component {
  state = {
    newsItem: {
      title: '',
      longDescription: '',
      category: '',
    }
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ newsItem: getNewsById(params.newsItemId) });
  }

  render() {
    const { title, longDescription, category } = this.state.newsItem;
    return (
      <div>
        <h1>{ title }</h1>
        <p>{ longDescription }</p>
        <div className="category">{ category.slice(0, 1).toUpperCase() + category.slice(1) }</div>
      </div>
    );
  };
};

export default NewsItemDetails;
