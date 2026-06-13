import { useState, useEffect } from "react";
import axios from "axios";

function randomimage() {
  const [myimg, setimg] = useState("");

  useEffect(() => {
    setInterval(() => {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          console.log(response.data);
          setimg(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 2000);
  }, []);

  return (
    <>
      <img src={myimg.message} height={300} width={300} />
    </>
  );
}
export default randomimage;
