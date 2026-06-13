function Map() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <h1>Map example</h1>
      {arr.map((value) => {
        return <h2> Array Element= {value}</h2>;
      })}
    </>
  );
}

export default Map;
