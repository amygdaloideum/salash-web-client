import React, { PropTypes, Component } from 'react';
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

class StartPage extends Component {
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
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </nav>
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
    user: state.auth.user
  };
}
export default connect(mapStateToProps)(StartPage);
