import React from 'react';
import NavigationBar from '../NavigationBar';

class App extends React.Component {
    render() {
        return (
            <>
            <NavigationBar />
                <div className="container">
                    <h1>Petrol stations</h1>
                </div>
            </>
        )
    }
};

export default App;
