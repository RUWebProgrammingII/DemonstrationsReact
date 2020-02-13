import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Container from './components/Container';
import News from './components/News';
import NewsItemDetails from './components/NewsItemDetails';
import TopGames from './components/TopGames';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ News } />
          <Route exact path="/news" render={ () => <Redirect to="/" /> } />
          <Route exact path="/topgames" component={ TopGames } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/:newsItemId" component={ NewsItemDetails } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
