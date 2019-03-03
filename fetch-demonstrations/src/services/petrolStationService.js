const getAllPetrolStations = () => {
    return fetch('https://apis.is/petrol').then(resp => {
        if (resp.ok) { return resp.json(); }
    }).then(data => {
        if (!data) { return []; }
        const petrolStations = data.results.map(d => { return { id: d.key, name: `${d.company} - ${d.name}`, fuelPrice: d.bensin95, dieselPrice: d.diesel } });
        return petrolStations;
    });
};

const removePetrolStation = id => {
    // TODO: Execute network request to delete petrol station
    fetch('https://apis.is/petrol/' + id, {
        method: 'DELETE'
    }).then(resp => {
        if (resp.ok) { console.log('Succeeded!'); }
    });
};

export default {
    getAllPetrolStations,
    removePetrolStation
};
