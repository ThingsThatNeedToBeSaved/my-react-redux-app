import React from 'react';
import Background from './features/backgrounds/Background';
import Quote from './features/quote/Quote';
import Weather from './features/weather/Weather';

function App() {
  return (
    <div className="App">
      <Background />
      <Quote />
      <Weather />
    </div>
  );
}

export default App;
