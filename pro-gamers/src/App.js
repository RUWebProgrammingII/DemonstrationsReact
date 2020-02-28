import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Container from './components/Container';
import News from './components/News';
import NewsItemDetails from './components/NewsItemDetails';
import TopGames from './components/TopGames';
import About from './components/About';
import SignupForm from './components/SignupForm';
import NotFound from './components/NotFound';
import { UserProvider } from './context/userContext';
import { ThemeProvider } from './context/themeContext';

class App extends React.Component {
  state = {
    user: {
      info: {
        username: 'arnarl',
        fullName: 'Arnar Leifsson',
      },
      changeUser: newUser => {
        this.setState({ user: { ...this.state.user, info: newUser } });
      },
    },
    theme: {
      current: 'dark',
      toggleTheme: () => {
        this.setState({
          theme: { ...this.state.theme, current: this.state.theme.current === 'dark' ? 'light' : 'dark' },
        });
      }
    }
  }
  render() {
    return (
      <ThemeProvider value={ this.state.theme }>
        <UserProvider value={ this.state.user }>
          <div className="App">
            <NavigationBar />
            <Container>
              <Switch>
                <Route exact path="/" component={ News } />
                <Route exact path="/news" render={ () => <Redirect to="/" /> } />
                <Route exact path="/topgames" component={ TopGames } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/signup" component={ SignupForm } />
                <Route exact path="/:newsItemId" component={ NewsItemDetails } />
                <Route path="*" component={ NotFound } />
              </Switch>
            </Container>
            <Footer />
          </div>
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default App;
