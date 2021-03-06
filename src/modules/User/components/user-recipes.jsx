import React from 'react';
import { Link } from 'react-router';

export default ({ user, goToRecipe }) => (
  <div>
    {
      user.recipes && !user.recipes.length
        ? <span>{user.username}has no recipes :(</span> : null
    }
    {user.recipes && user.recipes.map((recipe, index) => (
      <div key={index}>
        <span onClick={() => goToRecipe(recipe.id)}>{recipe.title}</span>
      </div>
    ))}
  </div>
);