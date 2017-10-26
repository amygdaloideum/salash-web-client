import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  formInput: PropTypes.object,
  removeIngredient: PropTypes.func,
  custom: PropTypes.bool,
};

export default class IngredientList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formInput, removeIngredient, custom } = this.props;
    const ingredients = formInput && formInput.value.filter(entry => custom ? entry.custom : !entry.custom);
    return (
      <div className="mb2">
        {ingredients && ingredients.length ?
          <div>
            <h2 className="subtitle">{custom ? 'Custom ingredients' : 'Ingredients from database'}</h2>
            <div className="field is-grouped is-grouped-multiline">
              {ingredients.map((entry, index) => (
                <div key={index} className="control">
                  <div className="tags has-addons">
                    <span className="tag is-medium is-dark">{entry.ingredient.label}</span>
                    <span className="tag is-medium is-info">
                      {custom ? entry.customAmount : `${entry.amount} ${entry.unit}`}
                      <span className="delete is-small" onClick={() => removeIngredient(entry, formInput)}></span>
                    </span>
                  </div>
                </div>
              ))
              }
            </div>
          </div> : null
        }
      </div>)
  }
}

IngredientList.propTypes = propTypes;