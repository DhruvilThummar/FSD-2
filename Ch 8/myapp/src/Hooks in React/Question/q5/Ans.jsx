import { useState } from "react";

function Q5() {
  const [formdata, setformdata] = useState({});

  function handelfrom(e) {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      "Your from submitted .\n Name: " +
        formdata.fname +
        ".\nEmail: " +
        formdata.email +
        ".\nGender: " +
        formdata.gender +
        ".\nCity " +
        formdata.city,
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        FN: <input type="text" name="fname" onChange={handelfrom} />
        <br />
        Email: <input type="email" name="email" onChange={handelfrom} />
        <br />
        pass: <input type="password" name="pass" onChange={handelfrom} />
        <br />
        MSG: <textarea name="msg" onChange={handelfrom}></textarea>
        <br />
        <select name="city" onChange={handelfrom}>
          <option value="ABD">Ahmedabad</option>
          <option value="RJT">Rajkot</option>
        </select>
        <br />
        <input type="radio" name="gender" value="M" onChange={handelfrom} />
        Male
        <input type="radio" name="gender" value="F" onChange={handelfrom} />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Q5;
