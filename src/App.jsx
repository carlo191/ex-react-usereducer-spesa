import { useState } from "react";

import "./index.css";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];
  const [addedProducts, setAddedProsducts] = useState([]);
  const updateProductQuantity=(name,quantity) => {
    setAddedProsducts(curr => curr.map(p => {
      if(p.name === name){
return{...p,quantity}
      }
      return p;
    }))
  }
  const addToCart = (product) => {
    const productAlredyAdded = addedProducts.find(
      (p) => p.name === product.name
    );
    if (productAlredyAdded) {
      updateProductQuantity(
        productAlredyAdded.name,
        productAlredyAdded.quantity + 1
      );
      return;
    }
    const productToAdd = {
      ...product,
      quantity: 1,
    };
    setAddedProsducts((curr) => [...curr, productToAdd]);
  };

  return (
    <>
      <h1>Prodotti tra cui scegliere:</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>
              {p.name} (€{p.price.toFixed(2)})
              <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
            </p>
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (
        <>
          <h2>Carrello:</h2>
          <ul>
            {addedProducts.map((p, i) => (
              <li key={i}>
                <p>
                  {p.quantity} x {p.name}
                  (€{p.price.toFixed(2)})
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
