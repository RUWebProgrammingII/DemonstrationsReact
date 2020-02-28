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
    const { search, filter, news } = this.state;
    const filteredNews = news.filter(n => (n.category === filter || filter === '') && (n.title.toLowerCase().includes(search.toLowerCase()) || search === ''));
    return filteredNews;
  }

  deleteItem(id) {
    // TODO: Make an actual network call deleting the item
    this.setState({ news: this.state.news.filter(n => n.id !== id) });
  }

  addItem(newsItem) {
    // TODO: Make an actual network call adding the item
    this.setState({ news: [ ...this.state.news, newsItem ], isModalOpen: false });
  }

  editItem(newsItem) {
    // TODO: Make an actual network call editing the item
    this.setState({ news: this.state.news.map(n => {
      if (n.id === newsItem.id) {
        return newsItem;
      }
      return n;
    }), isModalOpen: false });
  }

  openModal(type, newsItem) {
    if (type === 'edit') {
      this.setState({ isModalOpen: true, selectedItem: newsItem });
    } else if (type === 'add') {
      this.setState({ isModalOpen: true });
    }
  }

  renderModal() {
    const { selectedItem } = this.state;
    if (selectedItem) {
      return (
        <EditModal
          title="Edit news item"
          isOpen={ this.state.isModalOpen }
          onSubmit={ newsItem => this.editItem(newsItem) }
          newsItem={ selectedItem }
          close={ () => this.setState({ isModalOpen: false, selectedItem: null }) } />
      )
    }
    return (
      <EditModal
        title="Add news item"
        isOpen={ this.state.isModalOpen }
        onSubmit={ newsItem => this.addItem(newsItem) }
        close={ () => this.setState({ isModalOpen: false }) } />
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
          deleteItem={ id => this.deleteItem(id) } />
        { this.renderModal() }
      </div>
    );
  }
}

export default News;
