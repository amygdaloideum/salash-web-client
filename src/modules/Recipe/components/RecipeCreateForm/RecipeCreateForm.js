import React from 'react';
import { Field, Fields, FieldArray, reduxForm } from 'redux-form';
import RecipeEditor from '../RecipeEditor/RecipeEditor';
import CategorySelect from '../../../Category/components/CategorySelect';
import { renderTextarea, renderInput, SubmitButton } from '../../../../components/form/formInputs';
import { DeleteButton } from '../../../../components/InteractionButtons/InteractionButtons';
import IngredientAndAmountSelect from '../../../Ingredient/components/IngredientAndAmountSelect/IngredientAndAmountSelect';
import FileUpload from '../../../../components/form/file-upload';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'required';
  }
  if (!values.categories.length) {
    errors.categories = 'at least one category required';
  }
  if (!values.ingredients.length) {
    errors.categories = 'at least one ingredient required';
  }
  return errors;
}

let RecipeCreateForm = ({ editMode, handleSubmit, handleCreate, categories, invalid, submitting, pristine, getIngredients, getReport, deleteRecipe }) => (
  <form onSubmit={handleSubmit(handleCreate)}>
    <h1 className="title is-4">General</h1>
    <Field name="title" icon="fa-pencil-square-o" component={renderInput} type="text" label="Title" />

    <Field name="description" component={renderTextarea} placeholder="write a short description of the recipe" label="Description" />

    <div>
      <Field name='categories' label="Categories" options={categories} component={CategorySelect} />
    </div>
    <h1 className="title is-4">Ingredients</h1>
    <Field name="ingredients" getReport={getReport} getIngredients={getIngredients} label="ingredients" component={IngredientAndAmountSelect} />

    <h1 className="title is-4">Instructions</h1>
    <Field name="instructions" type="text" component={RecipeEditor} />

    <h1 className="title is-4">Image</h1>
    <Field name="image" component={FileUpload} />
    { editMode && 
      <DeleteButton text ="delete recipe" onClick={deleteRecipe}/>
    }
    <SubmitButton className="button" text={editMode ? 'save changes' : 'add recipe'} disabled={false/*{ invalid, submitting, pristine }*/} />
  </form>
);

RecipeCreateForm = reduxForm({
  form: 'RecipeCreateForm',
  validate
})(RecipeCreateForm);



export default RecipeCreateForm;