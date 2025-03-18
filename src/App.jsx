import { useState } from "react";

import "./index.css";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  return (
    <>
      <h1>Prodotti tra cui scegliere:</h1>
      <ul>
        {products.map((p, i) => (
          <li>
           <p>{p.name} (€{p.price.toFixed(2)})</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
