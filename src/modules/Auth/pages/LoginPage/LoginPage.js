import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/loginform/loginform';
import { FacebookButton, GoogleButton, TwitterButton } from '../../components/SocialSignInButtons/SocialSignInButtons';

import { getMessage } from '../../AuthReducer';
import env from '../../../../env';

class LoginPage extends React.Component {

  handleLogin = ({email, password}) => {
    this.props.dispatch(loginUserRequest({ email, password }));
  };

  handleFacebookLogin = () => {
    this.props.dispatch(facebookLoginRequest()).then( () => location.reload());
  };

  render() {
    return (
      <div >
          <header>
              <h1>login</h1>
            </header>
          <section >
            <a href={`https://www.facebook.com/v2.10/dialog/oauth?client_id=${env.FACEBOOK_APP_ID}&redirect_uri=${env.FACEBOOK_REDIRECT_URL}`}><button>Facebook</button></a>
          </section>
      </div>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    message: getMessage(state)
  };
}

export default connect(mapStateToProps)(LoginPage);
