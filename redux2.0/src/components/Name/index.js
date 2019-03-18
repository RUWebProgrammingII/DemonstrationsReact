import React from 'react';
import { connect } from 'react-redux';
import { changeUser } from '../../actions/userActions';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0
    };
  }
  onInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { changeUser } = this.props;
    const { name, age } = this.state;
    changeUser(name, age);
  }
  render() {
    const { name, age } = this.state;
    return (
      <div className="text-center" style={{ marginTop: 40 }}>
        <form action="" onSubmit={e => this.onSubmit(e)} className="form-horizontal">
          <div className="form-group">
            <input type="text" name="name" id="name" value={ name } onChange={e => this.onInput(e)} />
          </div>
          <div className="form-group">
            <input type="number" name="age" id="age" value={ age } onChange={e => this.onInput(e)} />
          </div>
          <div className="form-group">
            <input type="submit" value="Change name!" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
};

export default connect(null, { changeUser })(Name);
