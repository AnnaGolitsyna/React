import React from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetcUserData(this.props.userId);
  }

  fetcUserData = (userId) => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then((response) => response.json())
      .then((userData) => this.setState({ userData }));
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
