import React from 'react';
import { Counter } from './features/counter/Counter';
import { Header } from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
