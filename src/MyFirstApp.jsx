import React, { useState } from 'react';

const MyfirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value); 
  
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