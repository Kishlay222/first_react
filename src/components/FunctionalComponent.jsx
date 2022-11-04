import React from "react";
import { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This is a functional component</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button
        onClick={() => {
          setCount(count > 0 ? count - 1 : 0);
        }}
      >
        Sub
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default FunctionalComponent;
