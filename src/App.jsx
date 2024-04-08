import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Counter />
        <Timer />
      </div>
    </ThemeProvider>
  );
};

export default App;
