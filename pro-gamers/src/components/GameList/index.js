import React from 'react';
import Game from '../Game';

const GameList = ({ games }) => (
  <div className="games">
    { games.map(g => <Game key={ g.name } { ...g } />) }
  </div>
);

export default GameList;
