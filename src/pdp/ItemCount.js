import { useState } from "react";

const ItemCount = () => {
  /*   const cantidad = useState(0);
  const contador = cantidad[0];
  const setContador = cantidad[1]; */ // Esto es lo mismo que lo de abajo

  const [cantidad, setCantidad] = useState(10);

  const sumarCantidad = () => {
    if (cantidad < 30) setCantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    if (cantidad > 10) setCantidad(cantidad - 1);
  };

  return (
    <>
      <button onClick={restarCantidad}>-</button>
      <span>{cantidad}</span>
      <button onClick={sumarCantidad}>+</button>
    </>
  );
};

export default ItemCount;
