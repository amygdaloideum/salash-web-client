import React from 'react';
import { Link } from 'react-router';

function RecipeListItem({ recipe  }) {
  return (
    <div>
      {/*<div>
        <img src={recipe.imageUrl ? recipe.imageUrl : ''} />
      </div>*/}
      <div>
        <i className="material-icons">favorite</i>
        <span>{recipe.loves.low}</span>
      </div>
      <div>
        <h3>
          <Link to={`/recipes/${recipe.slug}-${recipe.cuid}`} >
            {recipe.title}
          </Link>
        </h3>
        <div>
          <span>Categories:</span>
          {recipe.categories.map((cat, i) => (
            <span key={i}>{cat.name}</span>
          ))}
        </div>
        <div>
          <span>Ingredients:</span>
          {recipe.ingredients.map((ing, i) => (
            <span key={i}>{ing.name}</span>
          ))}
        </div>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeListItem;
