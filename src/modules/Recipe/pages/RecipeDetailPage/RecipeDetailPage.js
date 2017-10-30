import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Import Components
import { LoveButton, FavButton, DeleteButton, EditButton } from '../../../../components/InteractionButtons/InteractionButtons'

// Import Actions
import { getRecipe } from '../../recipe-thunks';

const mapStateToProps = state => ({
  recipe: state.recipes.recipe,
  user: state.auth.user,
});

const dispatchToProps = {
  getRecipe,
};

class RecipeDetailsPage extends React.Component {

  constructor(props) { super(props); }

  createMarkup = markup => ({ __html: markup });

  componentDidMount() {
    const pathId = this.props.params.id;
    this.props.getRecipe(pathId);
  }

  love = () => { }

  unlove = () => { }

  favorite = () => { }

  unfavorite = () => { }

  delete = () => { }

  edit = () => {
    browserHistory.push(`/recipes/edit/${this.props.recipe.id}`);
  }

  render() {
    const { recipe } = this.props;
    if (!recipe.id) {
      return <div>nada</div>
    }
    const isUploader = (this.props.recipe) ? this.props.recipe.uploader.id === this.props.user.id : undefined;
    return (
      <div>
        {
          !this.props.recipe ? <div>
            <h1> Recipe not found</h1>
          </div> : null
        }
        {
          this.props.recipe ?
            <div>
              {
                this.props.recipe.image ? <div><img src={this.props.recipe.image.url} /></div> : null
              }
              <h1>{this.props.recipe.title}</h1>
              <div>
                {this.props.recipe.categories.map((cat, i) => (
                  <span key={i}>{cat.name}</span>
                ))}
              </div>

              <p>{this.props.recipe.description}</p>

              <div>
                <h3>Ingredients</h3>
                <table>
                  <tbody>
                    {this.props.recipe.ingredients.map((ing, i) => (
                      <tr key={i}>
                        <td>{ing.name}</td>
                        <td>{ing.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3>Instructions</h3>
              <div className="content" dangerouslySetInnerHTML={this.createMarkup(this.props.recipe.instructions)} />
              <div>
              </div>
              {isUploader ? (
                <div>
                </div>
              ) : null
              }
            </div> : null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(RecipeDetailsPage);
