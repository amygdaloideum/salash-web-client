import React from 'react';
import { Field } from 'redux-form';

const renderField = ({ className, input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const renderIngredients = ({ fields }) => (
  <div >
    <div>
      <label>Ingredients</label>
      <a type='button' onClick={() => fields.push()}><i className="material-icons">add</i>Add</a>
    </div>
    <ul>
      {fields.map((field, index) =>
        <li key={index}>
          <Field
            name={`${field}.amount`}
            type="text"
            component={renderField}
           
            label="amount" />
          of
          <Field
            name={`${field}.name`}
            type="text"
            component={renderField}
           
            label="ingredient" />
          <a type="button" onClick={() => fields.remove(index)}><i className="material-icons">clear</i></a>
        </li>
      )}
    </ul>
  </div>
);


export default renderIngredients;