import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Profile, Gallery } from "./tutorials/Profile";
import Avatar, {
  TodoList,
  TodoListAnother,
  TodoListYetAnother,
} from "./tutorials/Avatar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <hr />
      <Profile />
      <hr />
      <Gallery />

      <hr />
      <Avatar />
      <hr />
      <TodoList />
      <hr />
      <TodoListAnother />
      <hr />
      <TodoListYetAnother />
    </div>
  );
}

export default App;
