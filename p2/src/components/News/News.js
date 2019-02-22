import React from 'react';
import { getNews } from '../../services/newsService';
import ListView from '../ListView/ListView';
import SearchBar from '../SearchBar/SearchBar';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

class News extends React.Component {
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
        var news = getNews({ title: this.state.search, category: e.target.value });
        this.setState({ news: news, category: e.target.value });
    }
    render() {
        return (
            <div>
                <SearchBar onInput={e => this.onFilter(e)} />
                <CategoryFilter onChange={e => this.onRadio(e)} />
                <ListView list={ this.state.news } />
            </div>
        )
    };
};

export default News;
