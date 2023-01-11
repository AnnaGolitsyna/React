import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/u10003',
};

const App = () => {
  return <Comment author={userInfo} text="Good job!" date={new Date('2023-01-01T11:32:19.566Z')} />;
};

export default App;
