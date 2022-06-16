import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/#">Productos</a>
        </li>
        <li>
          <a href="/#">Muestrario</a>
        </li>
        <li>
          <a href="/#">Ofertas</a>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
