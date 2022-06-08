import { useState } from "react";

const ItemCount = () => {
  /*   const cantidad = useState(0);
  const contador = cantidad[0];
  const setContador = cantidad[1]; */ // Esto es lo mismo que lo de abajo

  const [cantidad, setCantidad] = useState(0);

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  return (
    <>
      <p>Cantidad</p>
      <button onClick={restarCantidad}>-</button>
      <span>{cantidad}</span>
      <button onClick={sumarCantidad}>+</button>
    </>
  );
};

export default ItemCount;
