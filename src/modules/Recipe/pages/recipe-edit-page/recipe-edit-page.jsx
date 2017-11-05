import React from 'react';
import { connect } from 'react-redux';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

import callApi from '../../../../util/api';
import RecipeCreateForm from '../../components/RecipeCreateForm/RecipeCreateForm';

// Import Actions
import { fetchCategories } from '../../../Category/CategoryThunks';
import { fetchIngredients } from '../../../Ingredient/IngredientTunks';
import { getRecipe, updateRecipe, deleteRecipe } from '../../recipe-thunks';

const htmlToEditorState = html => {
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  return EditorState.createWithContent(contentState);
}

const formatInredientsForEdit = (ingredients = [], customIngredients = []) => {
  const formattedIngredients = ingredients.map(ingredient => ({
    ingredient: {
      value: ingredient.id,
      label: ingredient.name,
    },
    amount: ingredient.amount,
    unit: ingredient.unit,
    custom: false,
  }));
  const formattedCustomIngredients = customIngredients.map(ingredient => ({
    ingredient: {
      value: ingredient.id,
      label: ingredient.name,
    },
    customAmount: ingredient.amount,
    custom: true,
  }));

  return formattedIngredients.concat(formattedCustomIngredients);
}

const mapStateToProps = state => ({
  recipe: state.recipes.recipe,
  categories: state.categories,
});

const dispatchToProps = {
  getRecipe,
  updateRecipe,
  fetchCategories,
  fetchIngredients,
  deleteRecipe,
};

export class RecipeEditPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.getRecipe(this.props.params.id);
  }

  handleCreate = fields => {
    this.props.updateRecipe(this.props.params.id, fields);
  };

  deleteRecipe = () => {
    this.props.deleteRecipe(this.props.params.id);
  }

  getIngredients = name => this.props.fetchIngredients(name)
    .then(({ payload }) => payload.map(ingredient => ({ value: ingredient.id, label: ingredient.name })))
    .then(ingredients => ({ options: ingredients }));

  prepareForEdit(recipe) {
    console.log(recipe);
    if (!recipe || !recipe.id) {
      return {};
    }
    return {
      ...recipe,
      instructions: htmlToEditorState(recipe.instructions),
      ingredients: formatInredientsForEdit(recipe.ingredients, recipe.customIngredients),
    };
  }

  render() {
    const { recipe, deleteRecipe } = this.props;
    const initialValues = this.prepareForEdit(recipe);
    return (
      <div>
        <h1>Edit recipe</h1>
        {recipe.id &&
          <RecipeCreateForm editMode="true" initialValues={initialValues} deleteRecipe={this.deleteRecipe} getIngredients={this.getIngredients} handleCreate={this.handleCreate} categories={this.props.categories} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(RecipeEditPage);
