import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Import Components
import { LoveButton, FavButton, DeleteButton, EditButton } from '../../../../components/InteractionButtons/InteractionButtons'
import RecipeContent from './components/recipe-content';

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
          this.props.recipe.image ? <figure className="container is-widescreen" >
            <img style={({ maxHeight: '100vh' })} src={this.props.recipe.image.url} />
          </figure> : null
        }
        <section className="section">
          <div className="container">
            {
              !this.props.recipe ? <div>
                <h1> Recipe not found</h1>
              </div> : null
            }
            {
              this.props.recipe ? <div>
                <RecipeContent recipe={recipe} />
                <EditButton onClick={this.edit} />
              </div> : null
            }
          </div>
        </section >
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(RecipeDetailsPage);
