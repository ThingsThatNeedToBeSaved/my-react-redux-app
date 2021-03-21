import React from 'react';
import Background from './features/backgrounds/Background';
import Quote from './features/quote/Quote';
import Todos from './features/todos/Todos';
import Weather from './features/weather/Weather';

function App() {
  return (
    <div className="App position-relative">
      <Background />
      <Quote />
      <Todos />
      <Weather />
    </div>
  );
}

export default App;
