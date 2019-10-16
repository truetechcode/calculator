import React from 'react';
import '../App.css';

import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

function App() {
  return (
    <div className="App">
      <h1>This is the calculator app</h1>
      <Display value='0' />
      <ButtonPanel />
    </div>
  );
}

export default App;
