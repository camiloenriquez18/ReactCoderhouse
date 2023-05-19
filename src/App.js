import './App.css';
import Barradenavegacion from './componentes/navbar/barradenavegacion';
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componentes/navbar/barradenavegacion.css"
import "./componentes/kart/childkart.css"
import "./componentes/itemlistcontainer/itemlistcontainer.css"




function App() {
  return (
    <>
      <BrowserRouter>
        <Barradenavegacion />
        <Itemlistcontainer greeting={"bienvenidos"} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;