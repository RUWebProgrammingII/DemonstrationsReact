import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import CounterWrapper from './components/CounterWrapper/CounterWrapper';
import Counter from './components/Counter/Counter';
import Name from './components/Name/Name';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import { getCurrentDegree } from './actions/actions';

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentDegree();
    }
    render() {
        return (
            <div>
                <Header />
                <CounterWrapper>
                    <Counter />
                    <Name />
                </CounterWrapper>
            </div>
        );
    };
};

const AppWithRedux = connect(null, { getCurrentDegree })(App);

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><AppWithRedux /></Provider>, document.getElementById('app'));
