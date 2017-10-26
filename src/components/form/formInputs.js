import React, { Component } from 'react';

export const renderInput = ({ input, label, icon, type, meta: { touched, error, valid } }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input className={`input ${touched && error && 'is-danger'} ${touched && valid && 'is-success'}`} {...input} type={type} />
    </div>
    {touched && error && <p className="help is-danger">{error}</p>}
  </div>
);

export const renderTextarea = ({ input, label, placeholder, type, meta: { touched, error, valid } }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <textarea
        className={`textarea ${touched && error && 'is-danger'} ${touched && valid && 'is-success'}`} {...input}
        type={type}
        placeholder={placeholder} />
    </div>
    {touched && error && <p className="help is-danger">{error}</p>}
  </div>
);

export const SubmitButton = ({ text, disabled: { invalid, submitting, pristine } }) => (
  <button className="button" disabled={invalid || submitting || pristine} type="submit">{text}</button>
);

export const SubmitButtonNoValidation = ({ text, submit }) => (
  <button onClick={submit} type="button">{text}</button>
);