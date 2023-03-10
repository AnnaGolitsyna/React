import React from 'react';
import User from './User';

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let uesrList;
    if (this.state.sorting) {
      uesrList = [...this.props.users].sort((a, b) =>
        this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age
      );
    } else {
      uesrList = this.props.users;
    }
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {uesrList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
