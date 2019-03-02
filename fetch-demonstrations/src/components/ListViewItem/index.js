import React from 'react';
import PropTypes from 'prop-types';

const ListViewItem = props => {
    const { name, fuelPrice, dieselPrice } = props;
    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name } <i className="fa fa-2x fa-times" style={{ float: 'right' }}></i></div>
            <div className="card-body">
                <h4 className="card-title">Prices of petrol</h4>
                <div className="card-text">
                    <div><strong>Fuel price:</strong> <span>{ fuelPrice } ISK</span></div>
                    <div><strong>Diesel price:</strong> <span>{ dieselPrice } ISK</span></div>
                </div>
            </div>
        </div>
    );
};

ListViewItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    fuelPrice: PropTypes.number.isRequired,
    dieselPrice: PropTypes.number.isRequired
};

export default ListViewItem;
