import { useState } from "react";

// Object型の状態を作るときは、変異時にイミュータブルに扱うこと
// updater関数として渡す変異後の値は、オブジェクトのスプレッド演算子を使うと便利
// useImmerという外部ライブラリのHookを使うと、オブジェクトの更新が便利になるっぽい
// が、どれほど標準的かわからないので、まずは基本に集中しておく
// チュートリアルの課題に取り組むとわかるが、
// useState({..})にオブジェクトを渡すと、返ってくる状態はHook関数に渡したオブジェクトと同一のものを指している
// なので、オブジェクトの変異は危険
export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
