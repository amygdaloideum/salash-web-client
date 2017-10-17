import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import DevTools from './components/DevTools';
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';

export class App extends Component {
  constructor(props, context) {
    super(props);
    this.state = { isMounted: false };
    this.context = context;
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  render() {
    return (
      <div>
        {/*!this.context.router.isActive('/', true) ? <Toolbar user={this.props.user} /> : null*/}
        <div className={styles.container}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.auth.user
  };
}

export default connect(mapStateToProps)(App);
