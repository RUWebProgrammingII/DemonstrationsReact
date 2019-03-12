import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import '../styles/site.less';

ReactDOM.render(<Provider store={ createStore(reducers) }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('app'));
