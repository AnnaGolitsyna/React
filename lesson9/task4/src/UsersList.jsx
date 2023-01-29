import React from 'react';
import User from './User';
import Filter from './Filter';

// input - users
// output - filterCount, filterList

class UsersList extends React.Component {
  state = {
    filterText: '',
  };

  handlerChange = (event) => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const usersList = this.props.users.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filterText)
    );

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={usersList.length}
          onChange={this.handlerChange}
        />

        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
