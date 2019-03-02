import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    const { onInput, value, type, label, htmlId, name, errorMessage } = props;
    return (
        <div className={ `form-group ${( errorMessage ? 'has-danger' : '')}` }>
            {
                label
                ?
                <label className="control-label" htmlFor={ htmlId }>{ label }</label>
                :
                <></>
            }
            <input
                className={ `form-control ${( errorMessage ? 'is-invalid' : '')}` }
                type={ type }
                onChange={ onInput }
                value={ value }
                id={ htmlId }
                name={ name } />
            {
                errorMessage
                ?
                <div className="invalid-feedback">{ errorMessage }</div>
                :
                <></>
            }
        </div>
    );
};

Input.propTypes = {
    /* The function that should be invoked when oninput is triggered */
    onInput: PropTypes.func.isRequired,
    /* The value of the input */
    value: PropTypes.string.isRequired,
    /* The type of input tag */
    type: PropTypes.oneOf([ 'text', 'password', 'email', 'submit' ]).isRequired,
    /* The label for the input */
    label: PropTypes.string,
    /* The ID of the HTML */
    htmlId: PropTypes.string,
    /* The HTML name attribute */
    name: PropTypes.string,
    /* An optional error message */
    errorMessage: PropTypes.string
};

export default Input;
