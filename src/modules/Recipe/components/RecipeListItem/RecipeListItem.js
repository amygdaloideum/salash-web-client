import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './RecipeListItem.css';

function RecipeListItem({ recipe  }) {
  return (
    <div className={styles['single-recipe']}>
      {/*<div className={styles['image-wrapper']}>
        <img src={recipe.imageUrl ? recipe.imageUrl : ''} />
      </div>*/}
      <div className={styles['love-rating']}>
        <i className="material-icons">favorite</i>
        <span>{recipe.loves.low}</span>
      </div>
      <div className={styles['text-wrapper']}>
        <h3 className={styles.title}>
          <Link to={`/recipes/${recipe.slug}-${recipe.cuid}`} >
            {recipe.title}
          </Link>
        </h3>
        <div className={styles.categories}>
          <span className={styles.label}>Categories:</span>
          {recipe.categories.map((cat, i) => (
            <span className={styles.category} key={i}>{cat.name}</span>
          ))}
        </div>
        <div className={styles.ingredients}>
          <span className={styles.label}>Ingredients:</span>
          {recipe.ingredients.map((ing, i) => (
            <span className={styles.ingredient} key={i}>{ing.name}</span>
          ))}
        </div>
        <p className={styles.desc}>{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeListItem;
