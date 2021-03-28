import React from "react";
import { Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { ItemListView } from "./views/ItemListView";
import { ItemDetailView } from "./views/ItemDetailView";
import { NavigationView } from "./views/NavegationView";
import { ContactView } from "./views/ContactView";
import { LoginView } from "./views/LoginView";
import { AboutView } from "./views/AboutView";
import { CartView } from "./views/CartView";

const EcommerceRouter = () => {
	return (
		<React.Fragment>
			<NavigationView />
			<Route exact path='/' component={HomeView} />
			<Route exact path='/comics' component={ItemListView} />
			<Route path='/comics/:id' component={ItemDetailView} />
			<Route path='/nosotros' component={AboutView} />
			<Route path='/contacto' component={ContactView} />
			<Route path='/login' component={LoginView} />
			<Route path='/carrito' component={CartView} />
		</React.Fragment>
	);
};

export { EcommerceRouter };
