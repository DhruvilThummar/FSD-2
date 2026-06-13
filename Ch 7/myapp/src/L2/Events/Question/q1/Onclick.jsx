function Onclick() {
  const mystyle = {
    color: "white",
    backgroundColor: "blue",
    border: "solid red 0.5px",
  };
  function handleclick() {
    alert("Welcome to LJU");
  }
  return (
    <>
      <button style={mystyle} onClick={handleclick}>
        Click me
      </button>
      <br />
      <br />
      <button style={mystyle} onDoubleClick={handleclick}>
        Double click me
      </button>
    </>
  );
}

export default Onclick;
