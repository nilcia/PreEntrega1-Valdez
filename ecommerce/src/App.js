import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavbarMenu from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from './image/suculenta.jpg'

export default function App() {
  return (
    <div>
      <NavbarMenu />
      <ItemListContainer greeting="Hola, haz comprado suculentas!" />
      <div className="image-container">
        <img src={imagen} />
      </div>
    </div>
  );
}