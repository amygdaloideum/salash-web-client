import React from 'react';
import { connect } from 'react-redux';
import { loginUserRequest, facebookLoginRequest } from '../../AuthActions';

import LoginForm from '../../components/loginform/loginform';
import { FacebookButton, GoogleButton, TwitterButton } from '../../components/SocialSignInButtons/SocialSignInButtons';

import { getMessage } from '../../AuthReducer';

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
        <div >
          {/*<section >
            <header>
              <h1>login</h1>
            </header>
            <div >
              <LoginForm login={this.handleLogin} facebookLogin={this.handleFacebookLogin} message={this.props.message} />
            </div>
          </section>*/}
          <header>
              <h1>login</h1>
            </header>
          <section >
            <FacebookButton auth={this.handleFacebookLogin} />
            <GoogleButton />
            <TwitterButton auth={facebookLoginRequest} />
          </section>
        </div>
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
