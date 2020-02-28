import React from 'react';
import Form from '../Form';
import Input from '../Input';
import RemoteSelectItem from '../RemoteSelectItem';
import validator from 'validator';
import toastr from 'toastr';
import countryService from '../../services/countryService';

class SignupForm extends React.Component {
  state = {
    fields: {
      fullName: '',
      email: '',
      telephone: '',
      country: '',
      region: '',
      city: '',
      address: '',
    },
    errors: {
      fullNameError: '',
      emailError: '',
      telephoneError: '',
      countryError: '',
      regionError: '',
      cityError: '',
      addressError: '',
    },
  }

  onInput(e) {
    this.setState({ fields: {
      ...this.state.fields,
      [ e.target.name ]: e.target.value,
    } });
  }

  validateForm() {
    const { fullName, email } = this.state.fields;
    const errors = {};

    if (fullName === '') { errors.fullNameError = 'Full name is required.'; }
    if (email === '') { errors.emailError = 'Email is required.'; }
    if (!validator.isEmail(email)) { errors.emailError = 'Email is not properly formatted.'; }

    if (Object.keys(errors).length > 0) {
      this.setState({ ...this.state.errors, errors });
      return false;
    }

    return true;
  }

  submitForm(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      toastr.error('The form was not successfully submitted!', 'Failed!');
    } else {
      console.log(this.state.fields);
      toastr.success('The form was successfully submitted!', 'Success!');
    }
  }

  render() {
    const { fullName, email, telephone, address, country, region, city } = this.state.fields;
    const { fullNameError, emailError } = this.state.errors
    return (
      <>
        <h1>Sign up here!</h1>
        <Form onSubmit={ e => this.submitForm(e) }>
          <Input
            type="text"
            value={ fullName }
            name="fullName"
            htmlId="fullName"
            label="Enter full name"
            errorMessage={ fullNameError }
            onInput={ e => this.onInput(e) }/>
          <Input
            type="text"
            value={ email }
            name="email"
            htmlId="email"
            label="Enter email"
            errorMessage={ emailError }
            onInput={ e => this.onInput(e) }/>
          <Input
            type="text"
            value={ telephone }
            name="telephone"
            htmlId="telephone"
            label="Enter telephone"
            onInput={ e => this.onInput(e) }/>
          <Input
            type="text"
            value={ address }
            name="address"
            htmlId="address"
            label="Enter address"
            onInput={ e => this.onInput(e) }/>
          <RemoteSelectItem
            onSelect={ e => this.onInput(e) }
            value={ country }
            name="country"
            defaultOption="-- No country is selected --"
            getData={ countryService.getCountries.bind(null, val => ({ value: val.code, label: val.name })) } />
          <RemoteSelectItem
            onSelect={ e => this.onInput(e) }
            value={ region }
            name="region"
            defaultOption="-- No region is selected --"
            getData={ countryService.getRegions.bind(null, country, val => ({ value: val.region, label: val.region })) }
            isDisabled={ country === '' } />
          <RemoteSelectItem
            onSelect={ e => this.onInput(e) }
            value={ city }
            name="city"
            defaultOption="-- No city is selected --"
            getData={ countryService.getCities.bind(null, country, region, val => ({ value: val.city, label: val.city })) }
            isDisabled={ country === '' || region === '' } />
          <input
            type="submit"
            value="Sign up now!"
            className="btn btn-primary"
            style={{ float: 'right', marginTop: '10' }} />
        </Form>
      </>
    );
  }
}

export default SignupForm;
