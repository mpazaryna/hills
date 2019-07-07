import React, { Component } from "react";
import TodosContainer from "./todosContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">sls-test-frontend</h1>
        </header>
        <p className="App-todo">
          <div id="todos">
            <TodosContainer />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
