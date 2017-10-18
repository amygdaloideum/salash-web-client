import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </a>
            <span className={`navbar-burger burger ${this.props.showBurger ? 'is-active' : ''}`} onClick={() => this.props.onBurgerClick}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${this.props.showBurger ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item is-active">Find</a>
            <a className="navbar-item">Share</a>
            <a className="navbar-item">Discover</a>
            <span className="navbar-item">
              <a className="button is-primary is-inverted">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Login</span>
              </a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;