import React from 'react';
import { getNews } from '../../services/newsService';

class NewsDetail extends React.Component {
    componentDidMount() {
        // TODO: Get all news and filter after dynamic id provided in route
        var newsItem = getNews().find((item) => item.id == this.props.match.params.newsId);
        this.setState({ newsItem: newsItem });
    }
    constructor() {
        super();
        this.state = {
            newsItem: {}
        };
    }
    render() {
        return (
            <div className="card border-dark mb-3">
        		<div className="card-header">{this.state.newsItem.category}</div>
        		<div className="card-body">
        			<h4 className="card-title">{this.state.newsItem.title}</h4>
                    <div className="card-text">
                        <img src={this.state.newsItem.url} style={{ width: 200 }} />
                        <p className="card-text">{this.state.newsItem.longDescription}</p>
                    </div>
        		</div>
        	</div>
        );
    }
};

export default NewsDetail;
