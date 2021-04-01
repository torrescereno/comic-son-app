import './App.css';

/* Componets */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailcontainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer titulo="Items" />
          </Route>
          <Route path='/category/:categoryId'>
              <ItemListContainer titulo="Categoria" />
          </Route>
          <Route path="/item/:id" component={ItemDetailcontainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
