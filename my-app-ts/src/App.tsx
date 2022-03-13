import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Profile, Gallery } from "./tutorials/Profile";
import Avatar, {
  TodoList,
  TodoListAnother,
  TodoListYetAnother,
} from "./tutorials/Avatar";
import PropsProfile from "./tutorials/PropsAvatar";
import PackingList from "./tutorials/PackingList";
import List, { ListComplicated } from "./tutorials/List";
import { Toolbar } from "./tutorials/Button";
import AnotherToolbar from "./tutorials/AnotherButton";
import StatefulGallery, { Form } from "./tutorials/Gallery";
import Counter, { AnotherCounter, FormSnapshot } from "./tutorials/Counter";
import BatchCounter from "./tutorials/BatchCounter";

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

      <hr />
      <PropsProfile />

      <hr />
      <PackingList />

      <hr />
      <List />
      <hr />
      <ListComplicated />

      <hr />
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <AnotherToolbar />

      <hr />
      <StatefulGallery />
      <br />
      <StatefulGallery />
      <br />
      <Form />

      <hr />
      <Counter />
      <AnotherCounter />
      <FormSnapshot />

      <hr />
      <BatchCounter />
    </div>
  );
}

export default App;
