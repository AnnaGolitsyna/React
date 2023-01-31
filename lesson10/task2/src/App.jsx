import React from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  // state - userData{} +++
  // output - render ShoppingCart, Profile, h1 - 'Hello, userName'
  state = {
    userData: {
      firstName: 'Bob',
      lastName: 'Marly',
    },
  };

  handlerChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData} />
          <Profile userData={this.state.userData} onChange={this.handlerChange} />
        </main>
      </div>
    );
  }
}
export default App;
