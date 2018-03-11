import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';
import Excel from './Components/Excel/Excel';

var headers = [
  "Book", "Author", "Language", "Published", "Sales"
];

var data = [
  ["The Lord of the Rings", "J. R. R. Tolkien","English", "1954–1955", "150 million"],
  ["Le Petit Prince (The Little Prince)", "Antoine deSaint - Exupéry","French", "1943", "140 million"],
  ["Harry Potter and the Philosopher's Stone", "J. K. Rowling","English", "1997", "107 million"],
  ["And Then There Were None", "Agatha Christie","English", "1939", "100 million"],
  ["Dream of the Red Chamber", "Cao Xueqin","Chinese", "1754–1791", "100 million"],
  ["The Hobbit", "J. R. R. Tolkien","English", "1937", "100 million"],
  ["She: A History of Adventure", "H. Rider Haggard","English", "1887", "100 million"],
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React mr.Btrn</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-persons">
          <Person name="Stan" age="30" />
          <Person name="Eric" age="31" />
          <Person name="Kyle" age="26" />
          <Person name="Kenny" age="39" />
        </div>
        <Excel headers={headers} data={data}/>
      </div>
    );
  }
}

export default App;
