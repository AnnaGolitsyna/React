import React from 'react';
import Counter from './Counter';

const App = () => {
    return (
      <>
        <Counter start={30} interval={1000} />
        <Counter start={0} interval={2000} />
        <Counter start={-30} interval={100} />
      </>
    );
}

export default App;