import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, coverImage, releaseYear, platform, place }) => (
  <div className="game">
    <div className="place">{ place }</div>
    <div>
      <div className="img" style={{ backgroundImage: `url(${coverImage})` }}></div>
      <h5>{ name }</h5>
    </div>
    <div>
      <div className="platform">{ platform }</div>
      <div className="release-year">{ releaseYear }</div>
    </div>
  </div>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  place: PropTypes.number.isRequired,
};

export default Game;
