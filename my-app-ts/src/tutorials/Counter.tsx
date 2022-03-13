import { useState } from "react";

// 予想に反して+3されないコード
// クリックなどのインタラクションが完了するまでは以前のレンダーのスナップショットが残るから
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1); // 0+1
          setNumber(number + 1); // 0+1
          setNumber(number + 1); // 0+1
        }}
      >
        +3
      </button>
    </>
  );
}

// 「スナップショット」を体感するサンプル
// alertに渡る値はあるレンダリングタイミングで固定されている
export function AnotherCounter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 1000);
        }}
      >
        +5
      </button>
    </>
  );
}

// ボタンを押してから5秒以内に宛先を変えても、やはりボタンを押した時点での宛先に届く
// メッセージもボタン押下時のもので固定されている
// この例はとても自然で安全に感じるため、「スナップショット」の意味はこれをベースに考える
// 「コンポーネント（レンダー）のスナップショット」を常にイメージすると良いかも
export function FormSnapshot() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
