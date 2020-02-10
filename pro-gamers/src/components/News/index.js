import React from 'react';
import { getNews } from '../../services/newsService';
import NewsList from '../NewsList';
import SearchBar from '../SearchBar';
import CategoryFilter from '../CategoryFilter';
import EditModal from '../EditModal';

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
    isModalOpen: false,
    selectedItem: null,
  };

  filterList() {
    const { news, search, filter } = this.state;
    const filteredNews = news.filter(n => (n.category === filter || filter === '') && (n.title.toLowerCase().includes(search.toLowerCase()) || search === ''));
    return filteredNews;
  }

  editItem(newsItem) {
    this.setState({
      news: this.state.news.map(n => {
        if (n.id === newsItem.id) {
          return newsItem;
        }
        return n;
      }),
      isModalOpen: false,
    });
  }

  addItem(newsItem) {
    const { news } = this.state;
    this.setState({
      news: [ ...news, newsItem ],
      isModalOpen: false,
    });
  }

  removeItem(id) {
    const { news } = this.state;
    this.setState({
      news: news.filter(n => n.id !== id),
    });
  }

  openModal(type, newsItem) {
    if (type === 'edit') {
      this.setState({ isModalOpen: true, selectedItem: newsItem });
    } else if (type === 'add') {
      this.setState({ isModalOpen: true });
    }
  }

  renderModal() {
    const { selectedItem, isModalOpen } = this.state;
    if (selectedItem) {
      return (
        <EditModal
          title="Edit news item"
          isOpen={ isModalOpen }
          close={ () => this.setState({ isModalOpen: false, selectedItem: null }) }
          newsItem={ selectedItem }
          onSubmit={ newsItem => this.editItem(newsItem) }/>
      )
    }
    return (
      <EditModal
        title="Add news item"
        isOpen={ isModalOpen }
        close={ () => this.setState({ isModalOpen: false }) }
        onSubmit={ newsItem => this.addItem(newsItem) }/>
    )
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => this.openModal('add') }>Add news item</button>
        <SearchBar
          value={ this.state.search }
          changeFn={ e => this.setState({ search: e.target.value }) } />
        <CategoryFilter
          onChange={ e => this.setState({ filter: e.target.id }) } />
        <NewsList
          news={ filteredList }
          editItem={ newsItem => this.openModal('edit', newsItem) }
          removeItem={ id => this.removeItem(id) } />
        { this.renderModal() }
      </div>
    );
  }
}

export default News;
