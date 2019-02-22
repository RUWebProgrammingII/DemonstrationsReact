import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import News from './News/News';
import NewsDetail from './NewsDetail/NewsDetail';
import About from './About/About';
import TopGames from './TopGames/TopGames';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ News } />
                    <Route path="/news" render={ () => <Redirect to="/" /> } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/topgames" component={ TopGames } />
                    <Route exact path="/:newsId" component={ NewsDetail } />
                </Switch>
            </div>
        </div>
    )
};

export default App;
