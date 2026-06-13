import { useState } from "react";

function Q6() {
  const [formdata, setformdata] = useState({});

  function handelfrom(e) {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  }

  function handleSubmit() {
    if (formdata.pass.length < 8) {
      alert("Password length must be grater or eqal to 8");
    } else if (!(formdata.pass === formdata.cpass)) {
      alert("Password and conform password is not same.");
    } else {
      alert(
        "Your from submitted .\n Name: " +
          formdata.fname +
          ".\nEmail: " +
          formdata.email
      );
    }
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
        conform pass: <input type="password" name="cpass" onChange={handelfrom} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Q6;
