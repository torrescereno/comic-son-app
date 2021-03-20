import './App.css';

/* Componets */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Lista de Items" />
    </div>
  );
}


export default App;
