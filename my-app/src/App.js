import logo from "./logo.svg";
import "./App.css";

import {
  MyButton,
  Profile,
  ShoppingList,
  EventButton,
} from "./components/Tutorials";
import { CounterButton } from "./components/State";
import { ParentComp } from "./components/Props";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MyButton />
        </div>
        <div>
          <MyButton />
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <ShoppingList />
        </div>
        <div>
          <EventButton />
        </div>

        <div>
          <CounterButton />
        </div>
        <div>
          <CounterButton />
        </div>

        <div>
          <ParentComp></ParentComp>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
