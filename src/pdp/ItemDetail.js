import React from "react";
import ItemCount from "../pdp/ItemCount";

function Item({ titulo, precio, stock, minimo }) {
  return (
    <div>
      <h5>{titulo}</h5>
      <p>${precio}</p>
      <p>Stock {stock} packs</p>
      <ItemCount />
      <button>COMPRAR</button>
      <p>Pedido mínimo {minimo} packs</p>
      <hr></hr>
    </div>
  );
}

export default Item;
