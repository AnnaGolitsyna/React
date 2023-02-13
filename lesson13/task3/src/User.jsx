import React from 'react';

const usersUrl = 'https://api.github.com/users';

class User extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.match.params.userId);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.login) {
      this.fetchUserData(this.props.match.params.userId);
    }
  }


  fetchUserData = (userId) => {
    fetch(`${usersUrl}/${userId}`)
      .then((response) => response.json())
      .then((userData) => this.setState({ userData }));
  };

  render() {
    if (!this.state.userData) {
      return null;
    }

    const { name, location, avatar_url } = this.state.userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
