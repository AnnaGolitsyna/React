import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible && (
        <div>
          <Clock location={'New York'} offset={-5} />
          <Clock location={'Kyiv'} offset={2} />
          <Clock location={'London'} offset={0} />
        </div>
      )}

      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default App;
