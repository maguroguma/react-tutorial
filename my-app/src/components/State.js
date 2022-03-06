import { useState } from "react";

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>Clicked {count} times</button>;
};
