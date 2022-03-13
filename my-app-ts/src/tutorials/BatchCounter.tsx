import { useState } from "react";

// useStateのsetterには、その状態の型の引数を取る関数（アップデータ関数）も渡せる
// 関数の引数は「前回の値」を意味し、それを利用して「次回の値」を計算できる
// setNum(5) は setNum(n => 5) と等価！
// この関数は純粋関数である必要がある
// イベントハンドラの処理が進む中で、setterに与えられた関数はキューに追加される
// イベントハンドラの処理が完了したら、キューの関数が次々に処理される
// 引数の名前は、状態の単語の1文字ずつをとったごく短いものにするのが慣例となっている
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
