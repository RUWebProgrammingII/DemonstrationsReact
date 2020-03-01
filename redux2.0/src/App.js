import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentDegree } from './actions/weatherActions';
import CounterWrapper from './components/CounterWrapper';
import Counter from './components/Counter';
import Name from './components/Name';
import Header from './components/Header';

const App = ({ getCurrentDegree }) => {
  useEffect(() => {
    // Used like componentDidMount
    getCurrentDegree();
  }, [ getCurrentDegree ]);
  return (
    <>
      <Header />
      <CounterWrapper>
        <Counter />
        <Name />
      </CounterWrapper>
    </>
  );
}

export default connect(null, { getCurrentDegree })(App);
