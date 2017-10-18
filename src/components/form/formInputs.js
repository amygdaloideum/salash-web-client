import React, { Component } from 'react';

export const renderInput = ({ input, label, icon, type, meta: { touched, error } }) => (
  <div>
    {label ?
      <div>
        <h2>{label}</h2> {touched && error && <span>{error}</span>}
      </div> : null
    }
    <div>
      {/*icon ? <i className={`fa ${icon}`}></i> : null*/}
      <input {...input} type={type} />
    </div>
  </div>
);

export const renderTextarea = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    {label ?
      <div>
        <h2>{label}</h2> {touched && error && <span>{error}</span>}
      </div> : null
    }
    <textarea {...input} type={type} placeholder={placeholder} />
  </div>
);

export const SubmitButton = ({ text, disabled: {invalid, submitting, pristine } }) => (
  <button disabled={invalid || submitting || pristine} type="submit">{text}</button>
);

export const SubmitButtonNoValidation = ({ text, submit }) => (
  <button onClick={submit} type="button">{text}</button>
);