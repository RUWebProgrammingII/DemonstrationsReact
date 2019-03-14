import React from 'react';
import ReactDOM from 'react-dom';
import CounterWrapper from './components/CounterWrapper/CounterWrapper';
import Counter from './components/Counter/Counter';
import Header from './components/Header';
import Name from './components/Name';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { getCurrentDegree } from './actions/weatherActions';
import reducers from './reducers';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentDegree();
  }
  render() {
    return (
      <>
        <Header />
        <CounterWrapper>
          <Counter />
        </CounterWrapper>
        <Name />
      </>
    );
  }
}

const AppWithRedux = connect(null, { getCurrentDegree })(App);

ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk)) }><AppWithRedux /></Provider>, document.getElementById('app'));
