import React from 'react';

const GameItem = ({ name, coverImage, releaseYear, platform, place }) => {
    return (
        <div className="card border-light mb-3">
            <div className="card-header">{ place }</div>
            <div className="card-body">
                <h4 className="card-title">{ name }</h4>
                <div className="card-text">
                    <div style={ { backgroundImage: `url(${coverImage})` } } className="card-body-image"></div>
                    <p>{ platform }</p>
                    <p>{ releaseYear }</p>
                </div>
            </div>
        </div>
    );
};

export default GameItem;
