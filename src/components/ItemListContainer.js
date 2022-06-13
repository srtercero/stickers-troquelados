import { useState, useEffect } from "react";
import customFetch from "./Promise";
import ProductList from "./ProductList";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(2000, ProductList).then((res) => setItems(res));
  }, [items]);
  return (
    <>
      <h3>{props.greeting}</h3>
      <ItemList ProductList={items} />
    </>
  );
};

export default ItemListContainer;
