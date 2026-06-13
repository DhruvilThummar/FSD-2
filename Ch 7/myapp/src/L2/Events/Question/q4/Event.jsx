function Event() {
  function handleclick() {
    document.getElementById("text1").innerHTML = "you Clicked Once";
  }
  function handledoubleclick() {
    document.getElementById("text1").innerHTML = "you Clicked twice";
  }
  function handelChange(e) {
    document.getElementById("text").innerHTML = e.target.value;
  }
  function handelSubmit(e) {
    e.preventDefault(); // without reload mate
    alert(document.getElementById("uname").value);
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          id="uname"
          onChange={handelChange}
          style={{ margin: "5px" }}
        />
        <input type="submit" value="submit" />
      </form>
      <h3 id="text">On Change Event</h3>
      <button onClick={handleclick} onDoubleClick={handledoubleclick}>
        Click
      </button>
      <h3 id="text1">Click / DoubleClick Event</h3>
    </>
  );
}

export default Event;
