import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import RemoteSelectItem from '../RemoteSelectItem/RemoteSelectItem';
import countryService from '../../services/countryService';
import validator from 'validator';
import toastr from 'toastr';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        fullName: '',
        email: '',
        telephone: '',
        country: '',
        region: '',
        city: '',
        address: ''
      },
      errors: {
        fullNameError: '',
        emailError: '',
        telephoneError: '',
        countryError: '',
        regionError: '',
        cityError: '',
        addressError: ''
      }
    };
  }
  onInput(e) {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value }
    });
  };
  validateForm() {
    const { fullName, email, telephone, country, region, city, address } = this.state.fields;
    const errors = {};
    if (fullName === '') { errors.fullNameError = 'Full name is required'; }
    if (email === '') { errors.emailError = 'Email is required'; }
    if (!validator.isEmail(email)) { errors.emailError = 'Email is not properly formatted.'; }

    if (Object.keys(errors).length > 0) {
      this.setState({ ...this.state.errors, errors });
      return false;
    }

    return true;
  };
  submitForm(e) {
    e.preventDefault();
    // TODO: Validate form
    if (this.validateForm()) {
      console.log(this.state.fields);
      toastr.success('The form was successfully submitted!', 'Success!');
    } else {
      toastr.error('The form was not successfully submitted!', 'Failed!');
    }
  }
  render() {
    const { fullName, email, telephone, country, region, city, address } = this.state.fields;
    const { fullNameError, emailError } = this.state.errors;
    return (
      <>
        <h1>Sign up here!</h1>
        <Form onSubmit={ e => this.submitForm(e) }>
          <Input
            type="text"
            name="fullName"
            value={ fullName }
            htmlId="fullName"
            label="Enter full name"
            errorMessage={ fullNameError }
            onInput={e => this.onInput(e)} />
          <Input
            type="text"
            name="email"
            value={ email }
            htmlId="email"
            label="Enter email address"
            errorMessage={ emailError }
            onInput={e => this.onInput(e)} />
          <Input
            type="text"
            name="telephone"
            value={ telephone }
            htmlId="telephone"
            label="Enter telephone"
            onInput={e => this.onInput(e)} />
          <Input
            type="text"
            name="address"
            value={ address }
            htmlId="address"
            label="Enter address"
            onInput={e => this.onInput(e)} />
          <RemoteSelectItem
           onSelect={e => this.onInput(e)}
           value={ country }
           name="country"
           getData={ countryService.getCountries.bind(null, val => { return { value: val.code, label: val.name } }) }
           defaultOption="-- No country is selected --" />
          <RemoteSelectItem
            onSelect={e => this.onInput(e)}
            value={ region }
            name="region"
            getData={ countryService.getRegions.bind(null, country, val => { return { value: val.region, label: val.region } }) }
            defaultOption="-- No region is selected --"
            isDisabled={ country === '' } />
          <RemoteSelectItem
           onSelect={e => this.onInput(e)}
           value={ city }
           name="city"
           getData={ countryService.getCities.bind(null, country, region, val => { return { value: val.city, label: val.city } }) }
           defaultOption="-- No city is selected --"
           isDisabled={ country === '' && region === '' } />
          <input type="submit" value="Sign up now!" className="btn btn-primary" style={{ float: 'right', marginTop: 10 }} />
        </Form>
      </>
    )
  }
};

export default SignupForm;
