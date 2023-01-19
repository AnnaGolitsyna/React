import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handlerLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handlerLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.handlerLogout} />;

    } else {
      button = <Login onLogin={this.handlerLogin} />;
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div> {button}</div>
      </div>
    );
  }
}

export default Auth;
