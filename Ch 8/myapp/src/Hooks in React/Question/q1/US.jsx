import { useState } from "react";

function US() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Count is {count}
    </button>
  );
}

export default US;
