import React from 'react';

const userDefault = {
  avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
  name: 'Facebook',
  location: 'Menlo Park, California',
};

class User extends React.Component {
  state = {
    user: userDefault,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = (userId) => {
    fetch(`http://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  };

  render() {
    // if (!this.state.user) {
    //   return null;
    // }

    const { name, location, avatar_url } = this.state.user;
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
