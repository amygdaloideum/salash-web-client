import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  recipe: PropTypes.object,
};

class RecipeContent extends React.Component {

  constructor(props) {
    super(props);
  }

  createMarkup = markup => ({ __html: markup });  

  render() {
    const { title, categories, description, ingredients, instructions } = this.props.recipe;
    return (
      <div>
        <h1 className="title">{title}</h1>
        <div>
          {categories.map((cat, i) => (
            <span key={i} className="tag is-medium is-primary">{cat.name}</span>
          ))}
        </div>

        <p>{description}</p>

        <div>
          <h3>Ingredients</h3>
          <table>
            <tbody>
              {ingredients.map((ing, i) => (
                <tr key={i}>
                  <td>{ing.name}</td>
                  <td>{ing.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Instructions</h3>
        <div className="content" dangerouslySetInnerHTML={this.createMarkup(instructions)} />
        <div>
        </div>
      </div>
    );
  }
}

RecipeContent.propTypes = propTypes;

export default RecipeContent;
