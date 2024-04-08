import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff', padding: '20px', margin: '20px' }}>
      <h2>Temporizador</h2>
      <p>Segundos: {seconds}</p>
    </div>
  );
};

export default Timer;
