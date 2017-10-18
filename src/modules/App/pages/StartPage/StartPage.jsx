import React  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import slug from 'limax';
import { Link } from 'react-router';

// Import Components
import RecipeQuickSearch from '../../../Recipe/components/RecipeQuickSearch/RecipeQuickSearch';
import Menu from '../../components/Menu/Menu';

// Import Actions
import { fetchCategories } from '../../../Category/CategoryActions';

// Import Selectors
import { getCategories } from '../../../Category/CategoryReducer';
import { getBurgerVisibility } from '../../app-reducer';

import Navbar from '../../components/Navbar/Navbar';

class StartPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  handleQuickSearch = (fields) => {
    const ingredient1 = slug(encodeURIComponent(fields.ingredient1.replace(/\s/g, "-")));
    const ingredient2 = slug(encodeURIComponent(fields.ingredient2.replace(/\s/g, "-")));
    browserHistory.push(`/search?categories=${fields.category}&ingredients=${ingredient1},${ingredient2}`);
  };

  render() {
    return (
      <div className="">
        {/*<div className={styles.menu}>
          <Menu user={this.props.user} />
        </div>'*/}
        <section className="hero is-fullheight">
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Full Height title</h1>
              <h2 className="subtitle">Full Height subtitle</h2>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container flex flex-column items-center">
              <span>scroll down to get the party started</span>
              <span className="icon is-large">
                <i className="fa fa-3x fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </section>
        <h1> salash </h1>
        <h2>raw food recipe hub</h2>
        <div>
          <div>
            <RecipeQuickSearch handleQuickSearch={this.handleQuickSearch} categories={this.props.categories} />
          </div>
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
StartPage.need = [() => { return fetchCategories(); }];

//Retrieve data from store as props
function mapStateToProps(state) {
  return {
    categories: getCategories(state),
    user: state.auth.user,
    showBurger: getBurgerVisibility(state),
  };
}
export default connect(mapStateToProps)(StartPage);
