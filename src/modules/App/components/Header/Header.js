import React from 'react';
import { Link } from 'react-router';

const SmallTitle = props => (
  <div>
    <h1><Link to="/" >Salash!</Link></h1>
  </div>
);

const BigTitle = props => (
  <div>
    <h1> <Link to="/" >Salash!</Link></h1>
    <span>Raw food recipe hub</span>
  </div>
);

const LoggedIn = ({ user }) => (
  <Link to={`/user/${user._id}`} >
    <i className="fa fa-user-circle"></i>
    {user.username}
  </Link>
);

export function Header(props, context) {
  return (
    <header >
      <section>
        <Link to="/" >Salash!</Link>
        <nav>
          <a>Detailed Search</a>
          <Link to="/create">Add Recipe</Link>
        </nav>
          {
            props.user && props.user._id ? <LoggedIn user={props.user} /> : null
          }
      </section>
    </header>
  );
}

export default Header;
