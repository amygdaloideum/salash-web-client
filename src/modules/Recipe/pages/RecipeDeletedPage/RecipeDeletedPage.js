import React from 'react';
import { Link } from 'react-router';

class RecipeDeletedPage extends React.Component {
  render() {
    return (
      <div>
        <h1>recipe deleted</h1>
        <p>it has been utterly destroyed</p>
        <Link to="/create"><i className="material-icons">add</i> add another one</Link>
      </div>
    );
  }
}

export default RecipeDeletedPage;
