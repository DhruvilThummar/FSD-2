import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Product from "./Product.jsx";
import img1 from "../../assets/hero.png";

function Myreact() {
  const products = [
    {
      name: "Laptop",
      price: 40000,
      pic: img1,
    },
    {
      name: "Lap",
      price: 25000,
      pic: img1,
    },
    {
      name: "top",
      price: 40,
      pic: img1,
    },
  ];
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pro">Product</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pro" element={<Product info={products} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Myreact;
