import React from 'react';
import { connect } from 'react-redux';
import callApi from '../../../../util/api';

import RecipeCreateForm from '../../components/RecipeCreateForm/RecipeCreateForm';

// Import Actions
import { fetchCategories } from '../../../Category/CategoryThunks';
import { fetchRecipe, updateRecipeRequest } from '../../RecipeActions';

// Import Selectors
import { getCategories } from '../../../Category/CategoryReducer';
import { getRecipe } from '../../RecipeReducer';

export class RecipeEditPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  handleCreate = (fields) => {
    this.props.dispatch(updateRecipeRequest(this.props.recipe.cuid, fields));
  };

  render() {
    return (
      <div>
        <h1>Edit recipe</h1>
        <RecipeCreateForm editMode="true" initialValues={this.props.recipe} handleCreate={this.handleCreate} categories={this.props.categories} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
RecipeEditPage.need = [
  () => fetchCategories(),
  ({ params, state }) => fetchRecipe(params.cuid, state.auth.token)
];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    categories: getCategories(state),
    recipe: getRecipe(state, props.params.cuid),
  };
}

export default connect(mapStateToProps)(RecipeEditPage);
