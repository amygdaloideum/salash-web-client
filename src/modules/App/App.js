import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {!this.props.router.isActive('/', true) ? <Navbar user={this.props.user} /> : null}
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.auth.user
  };
}

export default connect(mapStateToProps)(App);
