import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import RecipeListItem from '../recipe-list-item/recipe-list-item';

const propTypes = {
  recipes: PropTypes.array,
};

class RecipeList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.recipes.map((recipe, index) => (<RecipeListItem recipe={recipe} key={index} />))}
      </div>
    );
  }
}

RecipeList.propTypes = propTypes;

export default RecipeList;
