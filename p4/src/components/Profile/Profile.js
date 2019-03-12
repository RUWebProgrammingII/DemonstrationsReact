import React from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { updateUser } from '../../actions/userActions';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            img: '',
            // Base-64 encoded img
            encodedImg: ''
        };
    }
    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onFormSubmit(e) {
        e.preventDefault();

        // Dispatch an action
        const { fullName, encodedImg } = this.state;
        this.props.updateUser({ fullName, imgUrl: encodedImg });
    }
    previewImage(e) {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.addEventListener('load', () => {
            this.setState({ encodedImg: reader.result });
        });

        reader.readAsDataURL(file);
    }
    render() {
        const { fullName, img, encodedImg } = this.state;
        return (
            <>
                <h1>My profile</h1>
                <Form onSubmit={e => this.onFormSubmit(e)}>
                    <Input
                        type="text"
                        value={ fullName }
                        htmlId="fullName"
                        name="fullName"
                        onInput={e => this.onInputChange(e)}
                        label="Enter full name:" />
                    <Input
                        type="file"
                        value={ img }
                        htmlId="img"
                        name="img"
                        onInput={e => {
                            this.onInputChange(e);
                            this.previewImage(e);
                        }}
                        label="Add image:" />
                        <div className="well">
                            <img src={ encodedImg } alt="" style={{ width: 200 }} />
                            {
                                encodedImg !== '' ? <p>This will be your new image!</p> : <></>
                            }
                        </div>
                    <input type="submit" value="Update profile!" className="btn btn-primary" style={{ float: 'right', clear: 'both' }} />
                </Form>

            </>
        );
    }
};

export default connect(null, { updateUser })(Profile);
