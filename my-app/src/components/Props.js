import { useState } from "react";

const ChildButton = ({ count, onClick }) => (
  <button onClick={onClick}>Clicked {count} times</button>
);

export const ParentComp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Counters that update together</h1>
      <ChildButton count={count} onClick={handleClick} />
      <ChildButton count={count} onClick={handleClick} />
    </div>
  );
};
