import './App.css';

/* Componets */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailcontainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Lista de Items" />
      <ItemDetailcontainer />
    </div>
  );
}


export default App;
