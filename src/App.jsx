import { useState } from "react";
import "./App.css";
import reactCafeMenu from "./data/coffeeData";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    console.log(cart);
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Header />
      <Menu items={reactCafeMenu} addToCart={addToCart}></Menu>
    </div>
  );
}

export default App;
