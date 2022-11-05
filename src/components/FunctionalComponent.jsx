import React from "react";
import { useState } from "react";

function FunctionalComponent(props) {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");

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
      <h1>
        This is {props.name} age {props.age} works at {props.company}
      </h1>
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => props.setName(changeName)}>Change Name</button>
    </div>
  );
}

export default FunctionalComponent;
