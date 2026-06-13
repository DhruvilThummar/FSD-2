import { createContext } from "react";
import Comp2 from "./Comp2.jsx";

const Style = createContext();

function Comp1() {
  const Css = { color: "blue", fontSize: "25px" };
  return (
    <>
      <Style.Provider value={Css}>
        <Comp2 />
      </Style.Provider>
    </>
  );
}

export default Comp1;
export { Style };
