import Cart from "./Productcart.jsx";
import img1 from "../../../../assets/react.svg";
import img2 from "../../../../assets/vite.svg";

function List() {
  const product = [
    {
      title:'React',
      price: 50000,
      rating:  3.9,
      img: img1
    },
    {
      title:'Vite',
      price: 60000 ,
      rating: 4.6,
      img: img2
    }
  ];
  return <Cart list={product} />; // component call
}

export default List;
