import React from "react";
import { useState, useEffect } from "react";
import Promesa from "../components/Promise";
import ProductList from "./ProductList";
import ItemList from "../pdp/ItemList";
import Loader from "../components/Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState([]);

  useEffect(() => {
    setLoader(true);
    Promesa(2000, ProductList).then((res) => setItems(res));

    setLoader(false);
  }, [items]);

  return <>{loader ? <Loader /> : <ItemList ProductList={items} />}</>;
};

export default ItemListContainer;
