import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

const SmallTitle = props => (
  <div className={styles['small-content']}>
    <h1><Link to="/" >Salash!</Link></h1>
  </div>
);

const BigTitle = props => (
  <div className={styles['big-content']}>
    <h1 className={styles['site-title']}> <Link to="/" >Salash!</Link></h1>
    <span className={styles.subheader}>Raw food recipe hub</span>
  </div>
);

const LoggedIn = ({ user }) => (
  <Link to={`/user/${user._id}`} className={styles['logged-in']}>
    <i className="fa fa-user-circle"></i>
    {user.username}
  </Link>
);

export function Header(props, context) {
  return (
    <header className={styles.header}>
      <section>
        <Link to="/" className={styles['nav-home']}>Salash!</Link>
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
