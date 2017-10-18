import React from 'react';
import { Link } from 'react-router';

const Menu = ({ user }) => (
  <div>
    <Link to="/find">
      <i className="material-icons">search</i>
      <div>find</div>
    </Link>
    <Link to="/create">
      <i className="material-icons">add</i>
      <div>add</div>
    </Link>
    { !user || !user.cuid ? <Link to="/about"><i className="material-icons">info_outline</i><div>about</div></Link> : null }
    { user && user.cuid ? <Link to={`/user/${user.cuid}`}> <i className="material-icons">face</i> <div>you</div> </Link> : null }
  </div>
);

export default Menu;