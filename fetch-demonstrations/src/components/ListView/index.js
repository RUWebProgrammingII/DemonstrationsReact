import React from 'react';
import ListViewItem from '../ListViewItem';
import { PetrolStationConsumer } from '../../context/PetrolStationContext';

const ListView = () => {
    return (
        <PetrolStationConsumer>
            {
                petrolStationContext => petrolStationContext.list.map(item => <ListViewItem key={ item.id } { ...item } />)
            }
        </PetrolStationConsumer>
    );
};

export default ListView;
