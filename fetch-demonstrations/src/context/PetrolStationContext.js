import React from 'react';

const PetrolStationContext = React.createContext({});

export const PetrolStationProvider = PetrolStationContext.Provider;
export const PetrolStationConsumer = PetrolStationContext.Consumer;
