import React, { Component } from 'react';
import './App.css';
import {TodoItem} from "./TodoItem";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Things to do:</h1>
        </header>
        <ul className="todo-list">
            <TodoItem value={'Water flowers'} />
            <TodoItem value={'Buy groceries'} />
            <TodoItem value={'Learn React'} />
        </ul>
      </div>
    );
  }
}

export default App;
