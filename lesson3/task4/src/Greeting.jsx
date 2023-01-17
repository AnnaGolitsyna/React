import React from 'react';

function Greeting(props) {
  const { firstName, lastName, birthDate } = props.user;
  const userAge = Math.floor((new Date() - birthDate) / 31622400000);

  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I am ${userAge} years old`}</div>
  );
}

export default Greeting;
