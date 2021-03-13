import './App.css';

/* Componets */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Lista de Items" >
        <ItemCount titulo="Producto 1" descripcion="Descipcion del producto" img="producto.svg" cantidad = "10" inicial="0" />
      </ItemListContainer>
    </div>
  );
}


export default App;
