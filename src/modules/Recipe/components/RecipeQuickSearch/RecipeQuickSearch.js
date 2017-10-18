import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Import Style

let RecipeQuickSearch = props => (
  <form onSubmit={props.handleSubmit(props.handleQuickSearch)}>
    <div>
      show me
        <Field name="category" component="select">
        {props.categories.map((category, i) => {
          return <option key={i} value={category._id}>{`${category.name}s`}</option>;
        })}
      </Field>
    </div>
    <div>
      with
        <Field name="ingredient1" component="input" type="text" />
    </div>
    <div>
      and
        <Field name="ingredient2" component="input" type="text" />
    </div>
    <div>
      <div onClick={props.handleSubmit(props.handleQuickSearch)}>
        go
      </div>
    </div>
  </form>
);

RecipeQuickSearch = reduxForm({
  form: 'quickSearchForm',
  initialValues: {
    category: 'smoothie',
    ingredient1: 'tomato',
    ingredient2: 'banana'
  }
})(RecipeQuickSearch);

export default RecipeQuickSearch;
