import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  recipe: PropTypes.object,
};

class RecipeListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, image, description, slug, id } = this.props.recipe;
    return (
      <Link to={`/recipes/${id}`}>
        <article className="media">
          <figure className="media-left">
            <p className="image is-96x96">
              <img src={image && image.thumbnailUrl} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{title}</strong>
              </p>
              <p>{description}</p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                  <span className="icon is-small"><i className="fa fa-heart"></i></span>
              </div>
            </nav>
          </div>
        </article>
      </Link>
    );
  }
}

RecipeListItem.propTypes = propTypes;

export default RecipeListItem;
