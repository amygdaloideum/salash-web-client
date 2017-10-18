import React from 'react';
import { Link } from 'react-router';

class RecipeCreatedPage extends React.Component {
  render() {
    return (
      <div>
        <h1>recipe added successfully</h1>
        <p>thank you for your contribution</p>
        <p>you can manage your recipes on your profile page</p>
        <Link to="/create"><i className="material-icons">add</i> add another one</Link>
      </div>
    );
  }
}

export default RecipeCreatedPage;
