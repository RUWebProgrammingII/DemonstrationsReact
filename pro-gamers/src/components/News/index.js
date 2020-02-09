import React from 'react';
import { getNews } from '../../services/newsService';
import NewsList from '../NewsList';
import SearchBar from '../SearchBar';
import CategoryFilter from '../CategoryFilter';

class News extends React.Component {
  componentDidMount() {
    this.setState({
      news: getNews(),
    });
  }

  state = {
    news: [],
    search: '',
    filter: '',
  };

  filterList() {
    const { news, search, filter } = this.state;
    const filteredNews = getNews({ title: search, category: filter });
    return filteredNews;
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     news: [],
  //   };
  // };

  render() {
    const filteredList = this.filterList();
    return (
      <div>
        <h1>News</h1>
        <SearchBar
          value={ this.state.search }
          changeFn={ e => this.setState({ search: e.target.value }) } />
        <CategoryFilter
          onChange={ e => this.setState({ filter: e.target.id }) } />
        <NewsList news={ filteredList } />
      </div>
    );
  }
}

export default News;
