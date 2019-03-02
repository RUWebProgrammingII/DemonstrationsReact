import React from 'react';
import PropTypes from 'prop-types';
import ListViewItem from '../ListViewItem';

const ListView = props => {
    const { list } = props;
    return list.map(item => <ListViewItem key={ item.id } { ...item } />);
};

ListView.propTypes = {
    list: PropTypes.array.isRequired
};

export default ListView;
