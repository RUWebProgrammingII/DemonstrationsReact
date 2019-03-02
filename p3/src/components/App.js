import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './Footer/Footer';
import News from './News/News';
import NewsDetail from './NewsDetail/NewsDetail';
import About from './About/About';
import TopGames from './TopGames/TopGames';
import Signup from './Signup/Signup';
import { UserProvider } from '../context/UserContext';
import { ThemeProvider } from '../context/ThemeContext';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                info: {
                    username: 'arnarl',
                    fullName: 'Arnar Leifsson'
                },
                changeUser: (newUser) => {
                    this.setState({ user: { ...this.state.user, info: newUser } });
                }
            },
            theme: {
                current: 'dark',
                toggleTheme: () => {
                    this.setState({
                        theme: { ...this.state.theme, current: this.state.theme.current === 'dark' ? 'light' : 'dark' }
                    });
                }
            }
        };
    }
    render() {
        return (
            <ThemeProvider value={ this.state.theme }>
                <UserProvider value={ this.state.user }>
                    <NavigationBar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={ News } />
                            <Route path="/news" render={ () => <Redirect to="/" /> } />
                            <Route exact path="/about" component={ About } />
                            <Route exact path="/topgames" component={ TopGames } />
                            <Route exact path="/signup" component={ Signup } />
                            <Route exact path="/:newsId" component={ NewsDetail } />
                        </Switch>
                    </div>
                    <Footer />
                </UserProvider>
            </ThemeProvider>
        )
    }
}

export default App;
