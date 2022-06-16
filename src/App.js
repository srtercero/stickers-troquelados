import Header from "../src/components/header/Header";
import ItemListContainer from "../src/pdp/ItemListContainer";
import ItemDetailContainer from "../src/pdp/ItemDetailContainer";
import Main from "./components/home/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <ItemListContainer greeting="Productos destacados" />
      <ItemDetailContainer />
      <Footer />
    </>
  );
};

//export default variable
//export variable
export default App;
