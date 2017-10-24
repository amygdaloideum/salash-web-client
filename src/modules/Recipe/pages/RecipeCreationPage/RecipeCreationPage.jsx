import React from 'react';
import { connect } from 'react-redux';
import { addRecipeRequest } from '../../RecipeActions';
import callApi from '../../../../util/api';

import RecipeCreateForm from '../../components/RecipeCreateForm/RecipeCreateForm';

// Import Actions
import { fetchCategories } from '../../../Category/CategoryThunks';


const mapStateToProps = state => ({
  categories: state.categories,
});

const dispatchToProps = {
  fetchCategories,
};


export class RecipeCreationPage extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  handleCreate = (fields) => {
    this.props.dispatch(addRecipeRequest(fields));
  };

  initialValues = {
    categories: [],
    ingredients: [
      { amount: '', name: '' }
    ]
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">add recipe</h1>
          <RecipeCreateForm initialValues={this.initialValues} handleCreate={this.handleCreate} categories={this.props.categories} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(RecipeCreationPage);
