import React from 'react';
import { connect } from 'react-redux';
import { changeUser } from '../../actions/actions';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        };
    }
    onInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onFormSubmit(e) {
        e.preventDefault();
        this.props.changeUser(this.state.name, this.state.age);
        this.setState({ name: '', age: '' });
    }
    render() {
        return (
            <form action="" className="form form-horizontal" onSubmit={e => this.onFormSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Nafn</label>
                    <input type="text" value={this.state.name} id="name" name="name" className="form-control" onInput={e => this.onInput(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Aldur</label>
                    <input type="text" id="age" value={this.state.age} name="age" className="form-control" onInput={e => this.onInput(e)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Senda inn" className="btn btn-default" />
                </div>
            </form>
        )
    }
};

export default connect(null, { changeUser })(Name);
