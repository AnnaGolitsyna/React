import React from 'react';
import Greeting from './Greeting';

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('2005-02-01T11:32:19.566Z'),
};


function App() {
  return <Greeting { ...userData } />;
}

export default App;
