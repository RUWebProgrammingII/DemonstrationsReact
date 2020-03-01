import React from 'react';
import PropTypes from 'prop-types';

class RemoteSelectItem extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.__getData();
  }

  componentDidUpdate(prevProps) {
    const { data } = this.state;
    if (data.length === 0 || this.props.getData !== prevProps.getData) {
      this.__getData();
    }
  }

  __getData() {
    const { isDisabled, getData } = this.props;
    if (!isDisabled) {
      getData().then(data => this.setState({ data }));
    }
  }

  render() {
    const { defaultOption, value, onSelect, name } = this.props;
    const { data } = this.state;
    return (
      <div className="form-group">
        <select
          value={ value }
          className="custom-select"
          name={ name }
          onChange={ e => onSelect(e) }>
          <option value="">{ defaultOption }</option>
          {
            data.map(d => <option key={ d.value } value={ d.value }>{ d.label }</option>)
          }
        </select>
      </div>
    )
  }
};

RemoteSelectItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  /* Is used to populate options for this select */
  getData: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  isDisabled: PropTypes.bool,
};

RemoteSelectItem.defaultProps = {
  defaultOption: '-- Nothing selected --',
  isDisabled: false,
}

export default RemoteSelectItem;
