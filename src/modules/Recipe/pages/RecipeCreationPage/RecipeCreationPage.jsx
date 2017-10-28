import React from 'react';
import { connect } from 'react-redux';
import { addRecipeRequest } from '../../RecipeActions';
import callApi from '../../../../util/api';

import RecipeCreateForm from '../../components/RecipeCreateForm/RecipeCreateForm';

// Import Actions
import { fetchCategories } from '../../../Category/CategoryThunks';
import { fetchIngredients, fetchReport } from '../../../Ingredient/IngredientTunks';

import { EditorState } from 'draft-js';


const mapStateToProps = state => ({
  categories: state.categories,
});

const dispatchToProps = {
  fetchCategories,
  fetchIngredients,
  fetchReport,
};


export class RecipeCreationPage extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  handleCreate = (fields) => {
    this.props.dispatch(addRecipeRequest(fields));
  };

  getIngredients = name => this.props.fetchIngredients(name)
    .then(({ payload }) => payload.map(ingredient => ({value: ingredient.id, label: ingredient.name})))
    .then(ingredients => ({options: ingredients }));

  getReport = id => this.props.fetchReport(id)
    .then(({ payload }) => payload);

  initialValues = {
    categories: [],
    ingredients: [],
    instructions: EditorState.createEmpty()
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">add recipe</h1>
          <RecipeCreateForm initialValues={this.initialValues} getReport={this.getReport} getIngredients={this.getIngredients} handleCreate={this.handleCreate} categories={this.props.categories} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(RecipeCreationPage);
