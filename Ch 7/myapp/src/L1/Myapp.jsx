import "./Myapp.css";
import img1 from "../assets/hero.png";
import "../App.css";

function Myapp() {
  const name = "React";
  return (
    <>
      {/* Inline css */}
      <h1 style={{ color: "yellowgreen", fontStyle: "italic", fontSize: "25px" }}>
        Welcome To {name}
      </h1>
      <p className="para">JSX allows HTML to use</p>
      <div className="hero">
        <img src={img1} alt="logo" width="100" className="base" />
        <p className="vite" style={{color:"gold"}}>HTML,CSS,JS</p>
        <p className="framework" style={{color:"goldenrod"}}>React</p>
      </div>
      <ol type="A">
        <title>JSX Rules</title>
        <li> Return Single Root Element</li>
        <li> Close All Tags</li>
        <li> Use camelCase Attributes</li>
        <li> Passing JS Expression </li>
        <li> JSX Styling </li>
        <li> JSX Comments </li>
      </ol>
    </>
  );
}

export default Myapp;
