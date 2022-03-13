type ButtonProps = {
  onClick: () => void;
  children: string;
};

// onClick属性に渡す関数はクリックイベントを引数に取る関数が渡せる
// イベントオブエジェクトからイベント伝搬を中止させられる
function Button(props: ButtonProps) {
  const { onClick, children } = props;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
