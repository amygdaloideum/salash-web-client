import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import { ActionCreators } from '../../app-reducer';

const propTypes = {
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isBurgerVisible: state.app.isBurgerMenuExpanded,
});

const dispatchToProps = {
  setBurgerVisibility: ActionCreators.setBurgerVisibility.create,
};

const navbarStyle = {
  borderBottom: '1px solid #DDD',
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleBurgerVisibility = () => {
    this.props.setBurgerVisibility(!this.props.isBurgerVisible);
  }

  render() {
    const user = this.props.user;
    const isLoggedIn = user && user.id;
    return (
      <nav style={navbarStyle} className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <h1 className="title">Salash</h1>
            </Link>
            <span className={`navbar-burger burger ${this.props.isBurgerVisible ? 'is-active' : ''}`} onClick={this.toggleBurgerVisibility}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${this.props.isBurgerVisible ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item is-active">Find</a>
            <Link to="/create" className="navbar-item">Contribute</Link>
            <a className="navbar-item">Discover</a>
            {!isLoggedIn ?
              <span className="navbar-item">
                <Link to="/login" className="button is-outlined">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                  <span>Login</span>
                </Link>
              </span> : <Link to={`/user/${user.id}`} className="navbar-item ">
                <i className="fa fa-lg fa-account"></i>
                {user.username}
            </Link>
            }
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = propTypes;

export default connect(mapStateToProps, dispatchToProps)(Navbar);