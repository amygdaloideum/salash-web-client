import React from 'react';
import { connect } from 'react-redux';
import { requestToken } from '../../AuthThunks';
import { browserHistory } from 'react-router'

const mapStateToProps = state => ({
  user: state.auth.user,
});

const dispatchToProps = {
  requestToken: requestToken,
};

class LoginLandingPage extends React.Component {

  componentDidMount = () => {
      console.log(window.location.href);
    this.props.requestToken(this.props.location.query.code).then(data => {
      browserHistory.push('/');
    });
  };

  render() {
    return <div>facebook login</div>;
  }
}

export default connect(mapStateToProps, dispatchToProps)(LoginLandingPage);
