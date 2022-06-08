import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemCount />
    </>
  );
};

export default ItemListContainer;
