import React from 'react';
import { getNews } from '../../services/newsService';
import ListView from '../ListView/ListView';
import SearchBar from '../SearchBar/SearchBar';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

class Container extends React.Component {
    componentDidMount() {
        var news = getNews();
        this.setState({
            news: news
        });
    }
    constructor() {
        super();
        this.state = {
            news: [],
            search: '',
            category: ''
        };
    }
    onFilter(e) {
        var news = getNews({ title: e.target.value, category: this.state.category });
        this.setState({ news: news, search: e.target.value });
    }
    onRadio(e) {
        var news = getNews({ title: this.state.search, category: e.target.id });
        this.setState({ news: news, category: e.target.id });
    }
    render() {
        return (
            <div className="container">
                <SearchBar onInput={e => this.onFilter(e)} />
                <CategoryFilter onChange={e => this.onRadio(e)} />
                <ListView list={ this.state.news } />
            </div>
        )
    };
};

export default Container;
