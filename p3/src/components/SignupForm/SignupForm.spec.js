import React from 'react';
import { mount } from 'enzyme';
import SignupForm from './SignupForm';

describe('SignupForm component tests', () => {
    let component;
    beforeEach(() => {
        component = mount(<SignupForm />);
    });

    it('should test the generic input handler', () => {
        const fullName = 'Arnar Leifsson';
        component.find('input[name="fullName"]').first().simulate('change', { target: { value: fullName, name: 'fullName' } });
        expect(component.state().fields.fullName).toBe(fullName);
    });

    it('should contain an error if the form is invalid', () => {
        const invalidEmail = 'arnarl$ru.is';
        component.find('input[name="email"]').first().simulate('change', { target: { value: invalidEmail, name: 'email' } });
        component.find('input[type="submit"]').simulate('submit');

        expect(component.state().errors.fullNameError).toBe('Full name is required');
        expect(component.state().errors.emailError).toBe('Email is not properly formatted.');
    });

    it('should successfully submit the form if the data is valid', () => {
        component.find('input[name="fullName"]').first().simulate('change', { target: { value: 'Arnar Leifsson', name: 'fullName' } });
        component.find('input[name="email"]').first().simulate('change', { target: { value: 'arnarl@ru.is', name: 'email' } });
        component.find('input[type="submit"]').simulate('submit');
        expect(Object.values(component.state().errors).every(v => v === '')).toBe(true);
    });
});
