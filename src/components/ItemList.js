import Item from "./Item";

function ItemList({ ProductList }) {
  return ProductList.map((p) => (
    <Item
      titulo={p.titulo}
      precio={p.precio}
      stock={p.stock}
      minimo={p.minimo}
    />
  ));
}

export default ItemList;
