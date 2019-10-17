import React from 'react';
import '../styles/App.css';

import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
