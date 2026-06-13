// this also apdate the state its name useReducer
import { useReducer } from "react";

function reducer(state, action) {
  return state + action;
}

function UR() {
  const [state, dispatch] = useReducer(reducer, 20);

  return (
    <div>
        <h1>{state}</h1>
      <button onClick={() =>dispatch(5)}>
        Add
      </button>
    </div>
  );
}

export default UR;
