import React from 'react';
import GameItem from '../GameItem/GameItem';
import gameService from '../../services/gameService';

class TopGames extends React.Component {
    componentDidMount() {
        this.setState({ games: gameService.getGames() });
    }
    constructor() {
        super();
        this.state = { games: [] };
    }
    render() {
        const { games } = this.state;
        return games.map(g => <GameItem key={g.place} {...g} />)
    }
}

export default TopGames;
