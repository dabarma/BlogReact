import React from 'react';
import './App.css';
import Head from './head.js';
import TablonEntradas from './TablonEntradas.js';

function App() {
  return (
    <div className="App">
      <Head name="David" />
      <header className="App-header">
      <div className="row">
        <div className="col-sm-12">
          <TablonEntradas />
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
