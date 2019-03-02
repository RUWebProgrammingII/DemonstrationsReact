import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import RemoteSelectItem from '../RemoteSelectItem/RemoteSelectItem';
import countryService from '../../services/countryService';
import toastr from 'toastr';
import validator from 'validator';

const initialFields = {
    fullName: '',
    telephone: '',
    email: '',
    country: '',
    region: '',
    city: '',
    address: ''
}

const initialErrors = {
    fullNameError: 'Full name is required',
    telephoneError: 'Telephone is required',
    emailError: 'Email is required',
    addressError: 'Address is required'
}

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: initialFields,
            errors: initialErrors
        };
    }
    onInput(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    }
    isFormValid() {
        const { fullName, telephone, email, address, region, country } = this.state.fields;
        if (fullName === '' || telephone === '' || !validator.isEmail(email) || address === '' || region === '' || country === '') { return false; }
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.isFormValid()) {
            toastr.success('Successfully submitted', 'Success!');
            console.log(this.state.fields);
            this.setState({ fields: initialFields })
        } else {
            toastr.error('Failed to submit', 'Failed!');
        }
    }
    render() {
        const { fullName, telephone, email, country, region, city, address } = this.state.fields;
        const { fullNameError, telephoneError, emailError, countryError, regionError, cityError, addressError } = this.state.errors;
        return (
            <>
                <h1 style={{ marginBottom: 30 }}>Signup now</h1>
                <Form onSubmit={e => this.onSubmit(e)}>
                    <Input
                        onInput={e => this.onInput(e)}
                        value={fullName}
                        type="text"
                        label="Full name"
                        htmlId="fullName"
                        errorMessage={fullNameError}
                        name="fullName" />
                    <Input
                        onInput={e => this.onInput(e)}
                        value={email}
                        type="email"
                        label="Email address"
                        htmlId="email"
                        errorMessage={emailError}
                        name="email" />
                    <Input
                        onInput={e => this.onInput(e)}
                        value={telephone}
                        type="text"
                        label="Telephone"
                        htmlId="telephone"
                        errorMessage={telephoneError}
                        name="telephone" />
                    <Input
                        onInput={e => this.onInput(e)}
                        value={address}
                        type="text"
                        label="Address"
                        htmlId="address"
                        errorMessage={addressError}
                        name="address" />
                    <RemoteSelectItem
                        value={ country }
                        onSelect={e => this.setState({ fields: { ...this.state.fields, country: e.target.value, region: '', city: '' } })}
                        getData={countryService.getCountries.bind(null, value => ({ value: value.code, label: value.name }))}
                        defaultSelection="-- No country selected --" />
                    <RemoteSelectItem
                        value={ region }
                        onSelect={e => this.setState({ fields: { ...this.state.fields, region: e.target.value, city: '' } })}
                        getData={countryService.getRegions.bind(null, country, value => ({ value: value.region, label: value.region }))}
                        defaultSelection="-- No region selected --"
                        isDisabled={ country === '' }/>
                    <RemoteSelectItem
                        value={ city }
                        onSelect={e => this.setState({ fields: { ...this.state.fields, city: e.target.value } })}
                        getData={countryService.getCities.bind(null, country, region, value => ({ value: value.city, label: value.city }))}
                        defaultSelection="-- No city selected --"
                        isDisabled={ region === '' }/>
                    <input type="submit" className="btn btn-primary" style={{ float: 'right', marginTop: 10 }} value="Submit" />
                </Form>
            </>
        );
    }
};

export default Signup;
