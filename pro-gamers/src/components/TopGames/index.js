import React from 'react';
import { getGames } from '../../services/gameService';
import GameList from '../GameList';

class TopGames extends React.Component {
  state = {
    games: [],
  };

  componentDidMount() {
    this.setState({ games: getGames() });
  }

  render() {
    const { games } = this.state;
    return (
      <>
        <h1>Top Games</h1>
        <GameList games={ games } />
      </>
    );
  }
}

export default TopGames;
