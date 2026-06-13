function Event2() {
  function handelSubmit(e) {
    e.preventDefault();  // without reload mate 
    alert("You clicked Submit");
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" name="uname" style={{ margin: "5px" }} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Event2;
