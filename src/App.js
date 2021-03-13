import './App.css';

/* Componets */
import NavBar from './components/NavBar/NavBar';
import ImtemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImtemListContainer greeting="Hola mundo!!!!"/>
    </div>
  );
}


export default App;
