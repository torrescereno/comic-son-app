import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Componets */
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailcontainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { FormContainer } from "./components/FormContainer/FromContainer";

/* Provider */
import { CartProvider } from "./context/CartProvider";

import "./App.css";
// Conetexto

function App() {
	return (
		<div className='App'>
			<CartProvider>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path='/'>
							<ItemListContainer />
						</Route>
						<Route path='/category/:categoryId'>
							<ItemListContainer />
						</Route>
						<Route path='/order'>
							<FormContainer />
						</Route>
						<Route path='/item/:id' component={ItemDetailcontainer} />
						<Route path='/cart' component={Cart} />
					</Switch>
				</Router>
			</CartProvider>
		</div>
	);
}

export default App;
