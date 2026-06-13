function Cart(props) {
  return (
    <>
      {props.list.map((product, index) => (
        <div key={index}>
          <mark>Product: {index + 1}</mark>
          <br />
          <img src={product.img} alt="Product Image" width={200} />
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
          <h3>{product.rating}</h3>
        </div>
      ))}
    </>
  );
}

export default Cart;
