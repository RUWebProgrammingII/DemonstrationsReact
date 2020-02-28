import { news } from '../resources/news.json';

const getNews = () => news;
const getNewsById = id => news.find(n => n.id == id);

export {
	getNews,
	getNewsById,
};
