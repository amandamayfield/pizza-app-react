import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./components/Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "A classic pizza with pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Veggie",
      description: "A pizza with a variety of vegetables",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "A pizza with ham and pineapple",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
