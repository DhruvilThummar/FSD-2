import { createContext } from "react";
import Comp3 from "./Comp3.jsx";

const Student = createContext();

function Comp2() {
  return (
    <>
      <Student.Provider value="D R Thummar">
        <Comp3 />
      </Student.Provider>
    </>
  );
}

export default Comp2;
export { Student };
