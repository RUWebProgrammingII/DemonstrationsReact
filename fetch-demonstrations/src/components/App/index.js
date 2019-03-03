import React from 'react';
import NavigationBar from '../NavigationBar';
import ListView from '../ListView';
import petrolStationService from '../../services/petrolStationService';
import { PetrolStationProvider } from '../../context/PetrolStationContext';

class App extends React.Component {
    componentDidMount() {
        petrolStationService.getAllPetrolStations().then(data => this.setState({ petrolStations: {
            ...this.state.petrolStations,
            list: data
        }}));
    }
    constructor(props) {
        super(props);
        this.state = {
            petrolStations: {
                list: [],
                removePetrolStations: id => {
                    const { petrolStations } = this.state;
                    // Network call
                    petrolStationService.removePetrolStation(id);
                    this.setState({
                        petrolStations: {
                            ...petrolStations,
                            list: petrolStations.list.filter(l => l.id !== id)
                        }
                    });
                }
            }
        };
    }
    render() {
        return (
            <PetrolStationProvider value={ this.state.petrolStations }>
                <NavigationBar />
                <div className="container">
                    <h1>Petrol stations</h1>
                    <div className="row">
                        <div className="col">
                            <ListView />
                        </div>
                        <div className="col">
                            <ListView />
                        </div>
                    </div>
                </div>
            </PetrolStationProvider>
        )
    }
};

export default App;
