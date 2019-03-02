import React from 'react';
import PropTypes from 'prop-types';

class RemoteSelectItem extends React.Component {
    componentDidMount() {
        this._getData();
    }
    componentDidUpdate(prevProps, prevState) {
        const { data } = this.state;
        if (data.length === 0 || this.props.value !== prevProps.value) {
            this._getData();
        }
    }
    _getData() {
        const { getData, isDisabled } = this.props;
        if (!isDisabled) {
            getData().then(data => this.setState({ data }));
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        const { defaultSelection, onSelect, value } = this.props;
        const { data } = this.state;
        return (
            <select value={value} className="custom-select" onChange={onSelect}>
                <option defaultValue>{ defaultSelection }</option>
                { data.map(d => <option key={ d.value } value={ d.value }>{ d.label }</option>) }
            </select>
        )
    };
};

RemoteSelectItem.propTypes = {
    /* The function that is called to retrieve data from a remote location */
    getData: PropTypes.func.isRequired,
    /* Triggered when an option is selected within the dropdown */
    onSelect: PropTypes.func.isRequired,
    /* Selected value */
    value: PropTypes.string.isRequired,
    /* Determines whether the remote select item should disabled or NOT */
    isDisabled: PropTypes.bool,
    defaultSelection: PropTypes.string
};

RemoteSelectItem.defaultProps = {
    defaultSelection: '-- Nothing selected --',
    isDisabled: false
};

export default RemoteSelectItem;
