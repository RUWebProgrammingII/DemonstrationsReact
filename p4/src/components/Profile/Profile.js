import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      img: '',
      encodedImg: ''
    }
  }
  onInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();

    // Dispatch action
    const { fullName, encodedImg } = this.state;
    const { updateUser } = this.props;

    updateUser({ fullName, encodedImg });
  }
  previewImage(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.addEventListener('load', () => {
      this.setState({ encodedImg: reader.result })
    });

    reader.readAsDataURL(file);
  }
  render() {
    const { fullName, img, encodedImg } = this.state;
    return (
      <>
        <h1>{ this.props.translations.title }</h1>
        <Form onSubmit={ e => this.onFormSubmit(e) }>
          <Input
            type="text"
            onInput={ e => this.onInput(e) }
            name="fullName"
            value={ fullName }
            htmlId="fullName"
            label={ this.props.translations.fullName } />
          <Input
            type="file"
            onInput={ e => {
              this.onInput(e);
              this.previewImage(e);
            } }
            name="img"
            value={ img }
            htmlId="img"
            label={ this.props.translations.addImage } />
          <div className="well">
            <img src={ encodedImg } style={{ width: 200 }} />
          </div>
          <input type="submit" value={ this.props.translations.updateProfile } className="btn btn-primary" style={{ float: 'right', clear: 'both' }} />
        </Form>
      </>
    )
  };
};

const mapStateToProps = reduxStoreState => {
  const { profile, buttons, labels } = reduxStoreState.language;
  return {
    translations: { ...profile, ...buttons, ...labels }
  };
}

export default connect(mapStateToProps, { updateUser })(Profile);
