// ダブル・シングルクォートで属性値を与えると文字列として解釈される
export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}

// {}の中はJavaScriptの構文が書ける
// ただし、文字列が来るべき場所（タグ内の値など）に雑にオブジェクトを置くとエラーになる
export function TodoList() {
  const name = "Gregorio Y. Zara";
  return <h1>{name}'s To Do List</h1>;
}

const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

// 関数を実行しても良い
export function TodoListAnother() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

// オブジェクトを入れると見た目がややこしいので注意
export function TodoListYetAnother() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
