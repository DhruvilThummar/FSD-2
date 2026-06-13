import { useState } from "react";

function US1() {
  const [count, setCount] = useState(0);

  function inc() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function dec() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={inc} style={{ margin: "2px" }}>
        Incremnt
      </button>
      <button onClick={dec} style={{ margin: "2px" }}>
        Descremn
      </button>
      <p> Count is {count}</p>
    </>
  );
}

export default US1;
