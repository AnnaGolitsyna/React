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
      isLoggedIn: false,
    });
  };

  handlerLogout = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Login onLogin={this.handlerLogin} />;
    } else {
      button = <Logout onLogout={this.handlerLogout}/>;
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
