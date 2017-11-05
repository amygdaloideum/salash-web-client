import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import UserRecipes from '../components/user-recipes';

// Import Actions
import { fetchUser, addUser, removeUser } from '../user-thunks';
import { signOutUser } from '../../Auth/auth-thunks';

const mapStateToProps = state => ({
  user: state.user,
});

const dispatchToProps = {
  fetchUser,
  signOutUser,
};

export class UserPage extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
  }

  goToRecipe = (id) => {
    browserHistory.push(`/recipes/${id}`);
  }

  signOut = () => {
    this.props.signOutUser();
    browserHistory.push(`/`);
  }

  goToAbout = () => {
    browserHistory.push(`/about`);
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">{this.props.user.username}</h1>
          <h2 className="title is-4">recipes</h2>
          <UserRecipes goToRecipe={this.goToRecipe} user={this.props.user} />
          <button onClick={this.signOut}>sign out</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(UserPage);
