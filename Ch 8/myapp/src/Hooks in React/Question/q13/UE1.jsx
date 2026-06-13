import { useEffect, useState } from "react";

function UE1() {
  const [count, setcount] = useState(0);
  const [calculation, setcal] = useState(0);

  useEffect(() => {
    alert("clicked");
  }, [count]);

  useEffect(() => {
    alert("clicked");
  }, []);
  
  useEffect(() => {
    alert("clicked");
  });

  function changecount() {
    setcount(count + 1);
  }

  function changecalc() {
    setcal(calculation + 1);
  }

  return (
    <div>
      <button onClick={changecount}>Button A{count}</button>
      <br />
      <button onClick={changecalc}>Button B{calculation}</button>
    </div>
  );
}

export default UE1;
