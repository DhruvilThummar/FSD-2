import { useState, useEffect } from "react";
import axios from "axios";

function randomjoke() {
  const [joke, setJoke] = useState("");

  function fetchJoke() {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,sexist",
      )
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(fetchJoke, []);

  return (
    <div>
      <h1>{joke.setup}</h1>
      <h3>{joke.delivery}</h3>
      <h3>{joke.category}</h3>
      <button onClick={fetchJoke}>Generate Joke</button>
    </div>
  );
}
export default randomjoke;
