import { createRoot } from "react-dom/client";
import Order from "./components/Order";
import PizzaOfTheDay from "./components/PizzaOfTheDay";
import Header from "./components/Header";
import { cartContext } from "./contexts";
import { useState } from "react";

const App = () => {
  const cartHook = useState([]);

  return (
    <cartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
    </cartContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
