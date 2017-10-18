import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput, SubmitButton } from '../../../../components/form/formInputs';
import { Link } from 'react-router';


const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required!';
  }
  if (!values.password) {
    errors.password = 'Required!';
  }
  return errors;
}

const formStyle = { width: '300px;' };

let LoginForm = ({ handleSubmit, login, message, invalid, submitting, pristine }) => (
  <div>
    <form onSubmit={handleSubmit(login)}>
      <div>{message}</div>
      <Field name="email" icon="fa-envelope" component={renderInput} type="text" label="Email" />
      <Field name="password" icon="fa-unlock-alt" component={renderInput} type="password" label="Password" />
      <SubmitButton text="let me in" disabled={{ invalid, submitting, pristine }} />
      <div>
      <Link to="/signup">sign up</Link><a>forgot password?</a>
      </div>
    </form>
  </div>
)

export default reduxForm({ form: 'loginForm', validate })(LoginForm);