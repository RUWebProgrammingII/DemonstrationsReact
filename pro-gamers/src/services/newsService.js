import { news } from '../resources/news.json';

const getNews = (filter = {
	title: '',
	category: ''
}) => news.filter(n => (n.category === filter.category || filter.category === '') && (n.title.toLowerCase().includes(filter.title.toLowerCase()) || filter.title === ''));

export {
	getNews
};
