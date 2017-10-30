import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import slug from 'limax';
import { Link } from 'react-router';

// Import Components
import RecipeQuickSearch from '../../../Recipe/components/RecipeQuickSearch/RecipeQuickSearch';
import RecipeList from '../../../Recipe/components/recipe-list/recipe-list';
// Import Actions
import { fetchCategories } from '../../../Category/CategoryThunks';
import { getLatestRecipes } from '../../../Recipe/recipe-thunks';

import Navbar from '../../components/Navbar/Navbar';

const mapStateToProps = state => ({
  categories: state.categories,
  recipes: state.recipes.list,
});

const dispatchToProps = {
  fetchLatestRecipes: getLatestRecipes,
};

class StartPage extends React.Component {
  componentDidMount() {
    //this.props.dispatch(fetchCategories());
    this.props.fetchLatestRecipes();
  }

  handleQuickSearch = (fields) => {
    const ingredient1 = slug(encodeURIComponent(fields.ingredient1.replace(/\s/g, "-")));
    const ingredient2 = slug(encodeURIComponent(fields.ingredient2.replace(/\s/g, "-")));
    browserHistory.push(`/search?categories=${fields.category}&ingredients=${ingredient1},${ingredient2}`);
  };

  render() {
    return (
      <div className="">
        <section className="hero is-fullheight is-primary is-bold">
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <div className="container tc">
              <h1 className="title is-1">Salash</h1>
              <h2 className="subtitle is-4">vegan recipe hub</h2>
              <h3>save, share and discover new food</h3>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container flex flex-column items-center">
              <span>lets go</span>
              <span className="icon is-large">
                <i className="fa fa-3x fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </section>
        <div>
          <section className="section">
            <div className="container">
              <h1 className="title">Have a look at the latest added recipes</h1>
              <RecipeList recipes={this.props.recipes} />
            </div>
          </section>
          {/*<RecipeQuickSearch handleQuickSearch={this.handleQuickSearch} categories={this.props.categories} />*/}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(StartPage);
