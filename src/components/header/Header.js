import NavBar from "./NavBar";

const Header = (aVerQueLlega) => {
  console.log(aVerQueLlega);

  return (
    <header>
      <h1>
        <a href="/">Stickers</a>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
