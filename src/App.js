import React, {Component} from 'react';
import './App.css';
import {TodoItem} from "./TodoItem";
import {ItemAdder} from "./ItemInput";

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            items: ['Water flowers', 'Buy groceries', 'Learn React'],
        };
    }


    onAdd = (value) => {
            const newItems = [...this.state.items, value];
            this.setState({
                items: newItems,
            });

    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Things to do:</h1>
                </header>
                <ul className="todo-list">
                    {this.state.items.map(item => <TodoItem value={item}/>)}
                </ul>
                <ItemAdder onAdd={this.onAdd}/>
            </div>
        );
    }
}

export default App;
