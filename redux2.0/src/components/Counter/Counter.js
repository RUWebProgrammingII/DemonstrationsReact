import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../actions/counterActions';

class Counter extends React.Component {
  render() {
    const { increment, counter } = this.props;
    return (
      <div className="text-center">
        <p>{ counter }</p>
        <button onClick={() => increment(1)}>Increment</button>
      </div>
    )
  }
};

const mapStateToProps = ({ counter }) => {
  return {
    counter
  };
};

export default connect(mapStateToProps, { increment })(Counter);
