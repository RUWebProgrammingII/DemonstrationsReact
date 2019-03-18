import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../actions/actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
        this.props.increment(1);
    }
    render() {
        return (
            <div className="text-center">
                <p>{this.state.counter}</p>
                <button className="btn btn-default" onClick={() => this.incrementCounter()}>Increment</button>
            </div>
        )
    }
}

export default connect(null, { increment })(Counter);
