import React from 'react';

function Greeting(props) {
  const userAge = Math.floor((new Date() - props.user.birthDate) / 31622400000);

  return (
    <div className="greeting">{`My name is ${props.user.firstName} ${props.user.lastName}. I am ${userAge} years old`}</div>
  );
}

export default Greeting;
