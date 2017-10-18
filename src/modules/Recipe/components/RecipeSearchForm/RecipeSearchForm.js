import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextarea, renderInput, SubmitButtonNoValidation } from '../../../../components/form/formInputs';
import CategorySelect from '../../../Category/components/CategorySelect';
import IngredientSelect from '../../../Ingredient/components/IngredientSelect/IngredientSelect';


const validate = values => {
  const errors = {};
}

let RecipeSearchForm = ({ handleSubmit, handleSearch, categories, invalid, submitting, pristine }) => (
  <form>
    <div>
      <Field name="title" icon="fa-pencil-square-o" component={renderInput} type="text" label="Title" />
    </div>

    <div>
      <h2>categories</h2>
      <Field name='categories' options={categories.map(c => c.name)} component={CategorySelect} />
    </div>

    <div>
      <h2>ingredients</h2>
      <Field name="ingredients" component={IngredientSelect} />
    </div>

    <div>
      <SubmitButtonNoValidation submit={handleSubmit(handleSearch)} text='find recipes' />
    </div>

  </form>
);

RecipeSearchForm = reduxForm({
  form: 'RecipeSearchForm'
})(RecipeSearchForm);



export default RecipeSearchForm;