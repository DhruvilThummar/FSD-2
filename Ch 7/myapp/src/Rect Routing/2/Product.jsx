function Product(props){
    return (
    <>
      {
      props.info.map((product) => (
        <div>
          <img src={product.pic} alt="Product Image" width={200} />
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
      ))}
    </>
  );
};

export default Product;