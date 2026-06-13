import "../App.css";

function Myapp() {
  const n = "LJU";
  return (
    <>
      <h1>{n}</h1>
      <h1>"{n}"</h1>
      <h1>{"{n}"}</h1>
      <h1>{"{n}"}</h1>
      <h1>{"n"}</h1>
    </>
  );
}

export default Myapp;
