import { useState } from "react";

function US2() {
  const [name, setName] = useState("LJU");
  const [textcolor, setColor] = useState("red");
  const [hidetext, setHide] = useState("ReactJS");
  const [buttontext, setButtontext] = useState("Hide");

  function showhide() {
    if (buttontext === "Hide") {
      setButtontext("show");
      setHide("");
    } else {
      setButtontext("Hide");
      setHide("ReactJS");
    }
  }

  function changename() {
    if (name === "LJU") {
      setName("Welcome Students");
    } else {
      setName("LJU");
    }
  }
  function changecolor() {
    if (textcolor === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }

  return (
    <>
      <button onClick={changename} style={{ margin: "2px" }}>
        Change Text
      </button>
      <button onClick={changecolor} style={{ margin: "2px" }}>
        Change color
      </button>
      <button onClick={showhide} style={{ margin: "2px" }}>
        {buttontext}
      </button>
      <h1 style={{ color: textcolor }}>{name}</h1>
      <h2>{hidetext}</h2>
    </>
  );
}

export default US2;
