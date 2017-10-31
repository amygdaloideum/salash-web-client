import React from 'react';
import { connect } from 'react-redux';
import callApi from '../../../../util/api';

import RecipeCreateForm from '../../components/RecipeCreateForm/RecipeCreateForm';

// Import Actions
import { fetchCategories } from '../../../Category/CategoryThunks';
import { getRecipe, updateRecipeRequest } from '../../recipe-thunks';

const mapStateToProps = state => ({
  recipe: state.recipes.recipe,
  categories: state.categories,
});

const dispatchToProps = {
  getRecipe,
  fetchCategories,
};

export class RecipeEditPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchCategories();
    this.props.getRecipe(this.props.params.id);
  }

  handleCreate = (fields) => {
    this.props.dispatch(updateRecipeRequest(this.props.recipe.cuid, fields));
  };

  render() {
    const { recipe } = this.props;
    return (
      <div>
        <h1>Edit recipe</h1>
        {recipe.id &&
          <RecipeCreateForm editMode="true" initialValues={this.props.recipe} handleCreate={this.handleCreate} categories={this.props.categories} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(RecipeEditPage);
