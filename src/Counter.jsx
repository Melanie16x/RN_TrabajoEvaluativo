import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

const Counter = () => {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff', padding: '20px', margin: '20px' }}>
      <h2>Contador</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Contar: {count}</p>
    </div>
  );
};

export default Counter;
