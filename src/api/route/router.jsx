import React from "react";
import { Route } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { ItemListView } from "../views/ItemListView";
import { ItemDetailView } from "../views/ItemDetailView";
import { NavigationView } from "../views/NavegationView";
import { ContactView } from "../views/ContactView";
import { AboutView } from "../views/AboutView";
import { CartView } from "../views/CartView";
import { Footer } from "../atoms/Footer";
import { Wrapper } from "../atoms/Wrapper";

const EcommerceRouter = () => {
	return (
		<React.Fragment>
			<NavigationView />
			<Wrapper>
				<Route exact path='/' component={HomeView} />
				<Route exact path='/comics' component={ItemListView} />
				<Route path='/comics/:id' component={ItemDetailView} />
				<Route path='/nosotros' component={AboutView} />
				<Route path='/contacto' component={ContactView} />
				<Route path='/carrito' component={CartView} />
			</Wrapper>
			<Footer />
		</React.Fragment>
	);
};

export { EcommerceRouter };
