import { useState } from "react";

function US3() {
  const [data, setData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <>
      <input
        type="text"
        name="fn"
        onChange={handleChange}
        style={{ margin: "2px" }}
      />
      <br />
      <input
        type="text"
        name="ln"
        onChange={handleChange}
        style={{ margin: "2px" }}
      />
      <br />
      <h3>
        FirstName: {data.fn} <br />
        LastName: {data.ln}
      </h3>
    </>
  );
}

export default US3;
