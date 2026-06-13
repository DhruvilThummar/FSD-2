function Q3() {
  const Student = [
    {
      id: 1,
      name: "abc",
      std: 5,
    },
    {
      id: 2,
      name: "bcd",
      std: 6,
    },
    {
      id: 3,
      name: "cde",
      std: 3,
    },
    {
      id: 4,
      name: "def",
      std: 2,
    },
    {
      id: 5,
      name: "efg",
      std: 5,
    },
  ];
  return (
    <>
      {Student.filter((student) => student.std === 5).map((student) => {
        return (
          <div>
            <h2>Student Name:{student.name.toUpperCase()}</h2>
            <h2>Upadated Std:{student.std + 1}</h2>
          </div>
        );
      })}
    </>
  );
}
export default Q3;
