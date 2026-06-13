function Filter() {
  const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h2>Filter</h2>
      {no
        .filter((n) => n <= 6)
        .map((n1) => {
          return <h2>Updated Arr {n1}</h2>;
        })}
    </>
  );
}
export default Filter;
