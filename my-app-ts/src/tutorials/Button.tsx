// イベントハンドラ関数は、注入を行いたい主体である親コンポーネント内で定義する事が多い
// JSXのonClick属性などに、ハンドラ関数を与える
// 関数名はhandleEventのような命名が慣例的
// onSmashなど、受け取り側ではonEventのようなprops名を命名する
// export default function Button() {
//   function handleClick() {
//     alert("You clicked me!");
//   }
//
//   return <button onClick={handleClick}>Click me</button>;
// }

// childrenの型は最初は戸惑うことが多いかもしれない
// 今回はstring型となる
// type AlertButtonProp = {
//   message: string;
//   children: string;
// };

// イベントハンドラ関数はpropsにアクセス可能
// function AlertButton(props: AlertButtonProp) {
//   const { message, children } = props;
//   return <button onClick={() => alert(message)}>{children}</button>;
// }

// export function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">Play Movie</AlertButton>
//       <AlertButton message="Uploading!">Upload Image</AlertButton>
//     </div>
//   );
// }

type ToolbarProps = {
  onPlayMovie: () => void;
  onUploadImage: () => void;
};

// 外部のコンポーネント利用者にハンドラ関数を注入させる（インターフェースを与える）
export function Toolbar(props: ToolbarProps) {
  const { onPlayMovie, onUploadImage } = props;
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

type ButtonProps = {
  onClick: () => void;
  children: string;
};

function Button(props: ButtonProps) {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
}
