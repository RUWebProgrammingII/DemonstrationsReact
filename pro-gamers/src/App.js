import React from 'react';
import NavigationBar from './components/NavigationBar';
import Container from './components/Container';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <News />
      </Container>
    </div>
  );
}

export default App;
