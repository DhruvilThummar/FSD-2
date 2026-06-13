// this also update the state its name useReducer
import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }
}

function UR() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({type:'increment'})}>click me {state}</button>
    </div>
  );
}

export default UR;
