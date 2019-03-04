import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import '../styles/site.less';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
