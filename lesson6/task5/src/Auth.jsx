import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {

  state = {
    isLog: true,
    isSpinner: false,
  };

  chandeLogin = (e, spinner) => {
    if (spinner) {
      this.setState({
        isSpinner: true,
      });
      setTimeout(() => {
        this.setState({
          isSpinner: false,
          isLog: !this.state.isLog,
        });
      }, 2000);
    } else {
      this.setState({
        isSpinner: false,
        isLog: !this.state.isLog,
      });
    }
  };

  render() {
    const button = this.state.isLog ? (
      <Login onLogin={(e) => this.chandeLogin(e, 'spinner')} />
    ) : (
      <Logout onLogout={this.chandeLogin} />
    );

    return <>{this.state.isSpinner ? <Spinner size={50} /> : button}</>;
  }
}

export default Auth;
