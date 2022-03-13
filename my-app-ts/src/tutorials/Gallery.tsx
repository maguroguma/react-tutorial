import { useState } from "react";
import { sculptureList } from "../data/data";

// useState Hook
// 状態と状態のmutation用の関数が配列（2要素のタプル）で返される
// 状態はコンポーネントインスタンスローカルなので、複数のコンポーネントを作成しても、
// 状態はそれぞれで独立しており、それぞれで管理される
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

// Hookは必ずコンポーネント関数の最初でまとめて実行すること！(ESLintで警告を設定するのが良い)
// 通常の変数で十分なときは、コンポーネントの状態として作らずに普通の変数で済ませること！
// 状態変数は、コンポーネントの再レンダリングの間に情報を保持するためにのみ必要なものである

// textのinputイベントを扱う例
// eventの型を調べるときは、JSXネイティブなハンドラ設定用属性に、
// イベントを受け取るアロー関数を渡して型推論を見るのが良さそう？
export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
