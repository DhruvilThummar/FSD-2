function Q1() {
  const fruit = [
    { itemid: 1, itemname: "Mango", price: 50, available: true },
    { itemid: 2, itemname: "Apple", price: 90, available: false },
    { itemid: 3, itemname: "Lichi", price: 40, available: false },
    { itemid: 4, itemname: "Strawbarry", price: 70, available: true },
  ];
  return (
    <div>
      <h1>Fruits details</h1>
      {fruit
        .filter((fruit) => fruit.available == true)
        .map((fruit) => (
          <div key={fruit.itemid}>
            <h2>Fruit name:{fruit.itemname.toUpperCase()}</h2>
            <h2>Updated price:{fruit.price + 10}</h2>
          </div>
        ))}
    </div>
  );
}
export default Q1;
