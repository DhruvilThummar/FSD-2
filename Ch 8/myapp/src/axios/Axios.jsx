import { useState, useEffect } from "react";
import axios from "axios";

function randomimage() {
  const [myimg, setimg] = useState("");

  const ax = (() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response.data);
        setimg(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  })

  useEffect(() => {
    setInterval(ax, 2000);
  }, []);

  return (
    <>
      <img src={myimg.message} height={300} width={300} />
    </>
  );
}
export default randomimage;
