import React from 'react';
import { connect } from 'react-redux';

// Import Components
import RecipeList from '../../components/recipe-list/recipe-list';

// Import Actions
import { searchRecipes } from '../../recipe-thunks';

// Import Selectors
import { getRecipes } from '../../recipe-reducer';

import { jsToStringQuery, queryToAffirmation } from '../../../../util/queryBuilder';

class RecipeListPage extends React.Component {
  componentDidMount() {
    const url = jsToStringQuery('recipes/search', this.props.location.query);
    this.props.dispatch(searchRecipes(url));
  }

  getAffirmation = () => {
    return queryToAffirmation(this.props.location.query);
  }

  render() {
    return (
      <div>
      {
        this.props.recipes ? (<RecipeList affirmation={this.getAffirmation()} recipes={this.props.recipes} />) : null
      }
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
RecipeListPage.need = [({ query }) => {
  return searchRecipes(query);
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    recipes: getRecipes(state),
  };
}

export default connect(mapStateToProps)(RecipeListPage);
