// input => [users]
// output => pagination (3 li), ul users


import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      totalItems: props.users.length,
      itemsPerPage: 3,

    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,

    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const start =
      this.state.itemsPerPage * this.state.currentPage -
      this.state.itemsPerPage;
    const end = this.state.itemsPerPage * this.state.currentPage;
    const userPage = this.props.users.slice(start, end);

    return (
      <div>
        <Pagination {...this.state} goPrev={this.goPrev} goNext={this.goNext}/>

        <ul className="users">
          {userPage.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
