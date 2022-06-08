import Header from "../src/components/Header";
import ItemListContainer from "../src/components/ItemListContainer";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <ItemListContainer greeting="Bienvenido a Stickers" />
      <Footer />
    </>
  );
};

//export default variable
//export variable
export default App;
