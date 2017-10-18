import React from 'react';

// Import Components
import RecipeListItem from './RecipeListItem/RecipeListItem';

function RecipeList(props) {
  return (
    <div>
      <div>
        <div>
          {props.affirmation}
        </div>
        {/*<div>
          <span>most loved</span>
          <a>all time</a>
          <a>this month</a>
          <a>this week</a>
        </div>*/}
      </div>
      {props.recipes.map((recipe, index) => (<RecipeListItem recipe={recipe} key={index} />))}
    </div>
  );
}

export default RecipeList;
