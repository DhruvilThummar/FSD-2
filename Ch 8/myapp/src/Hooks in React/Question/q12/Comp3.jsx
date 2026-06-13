import { useContext } from "react";
import { Style } from "./Comp1.jsx";
import { Student } from "./Comp2.jsx";

function Comp3() {
  const Css = useContext(Style);
  const String = useContext(Student);
  return <h1 style={Css}>{String}</h1>;
}

export default Comp3;
