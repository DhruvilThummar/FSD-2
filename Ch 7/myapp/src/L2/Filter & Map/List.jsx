function List() {
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
    <ul>
      {Student.map((Student) => {
        return <li key={Student.id}>{Student.name}</li>;
      })}
    </ul>
  );
}

export default List;
