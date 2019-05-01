import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import StatefullHello from './components/StatefulHello';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React TypeScript </h1>
        </header>
        <h2> Stateless Hello </h2>
        <Hello name="Daniel" enthusiasmLevel={3}/>
        <Hello name="Bryan" enthusiasmLevel={2}/>
        <h2> Statefull Hello </h2>
        <StatefullHello name="Rock"/>
      </div>
    );
  }
}

export default App;
