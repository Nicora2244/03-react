import React, { useState } from 'react';

const MyfirstApp = () => {
  const defaultValue = 0;
  const [counter, setCounter] = useState(defaultValue); 
  
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  
  const handleReset = () => {
    setCounter(defaultValue);
  };
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick = { () => handleSubtract ()}>Subtract</button>
      <button onClick = { () => handleReset ()}>Reset</button>
    </div>
  );
};

export default MyfirstApp;