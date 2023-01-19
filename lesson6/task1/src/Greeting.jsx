import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

const Greeting = ({ isLoggedIn }) => {

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
};

export default Greeting;
