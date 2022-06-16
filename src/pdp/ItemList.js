import Item from "../pdp/Item";
import React from "react";

const ItemList = ({ ProductList }) => {
  return (
    <div>
      {ProductList.map(
        (
          item // map es una función que recorre un array
        ) => (
          <Item
            titulo={item.titulo}
            precio={item.precio}
            stock={item.stock}
            minimo={item.minimo}
          />
        )
      )}{" "}
      {/* ProductList es un array de objetos */}
    </div>
  );
};

export default ItemList;
