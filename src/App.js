import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Barradenavegacion from './componentes/navbar/barradenavegacion';
import Itemlistcontainer from './componentes/itemlistcontainer/itemlistcontainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componentes/navbar/barradenavegacion.css"
import "./componentes/kart/childkart.css"
import "./componentes/itemlistcontainer/itemlistcontainer.css"

function App() {
  return (
    <><Barradenavegacion /><Itemlistcontainer greeting={"bienvenidos"} /></>
  );
}

export default App;