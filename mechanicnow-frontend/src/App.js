import React from 'react';
import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing/Landing';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MechanicNow</h1>

        <Landing />
      </header>
    </div>
  );
}

export default App;
