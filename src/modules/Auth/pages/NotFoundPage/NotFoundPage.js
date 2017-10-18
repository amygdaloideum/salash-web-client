import React from 'react';
import { connect } from 'react-redux';

export function NotFoundPage(props) {
  return (
    <div>
      <form action="/auth/authenticate" method="post">
        <h1>404 - Page Not Found</h1>
        <p>Bruh, what u doin out here?</p>
      </form>
    </div>
  );
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(NotFoundPage);
