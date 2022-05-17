import React, { Fragment } from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Counter App: {count}</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
