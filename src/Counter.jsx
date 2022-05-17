import React from "react";
import "./styles.css";
import style from "./counter.module.css";
const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div className={count % 2 === 1 ? style.striked : style.green}>
        <h1>{count}</h1>
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
  );
};

export default Counter;
