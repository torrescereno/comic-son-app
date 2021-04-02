import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
	const [cartItem, setCartItem] = useState([]);

	// Agregar cierta cantidad de un item al carrito
	const addItem = (newProduct, quantity) => {
		// Buscar (por indice) el producto en el array actual del carrito
		const index = cartItem.findIndex((elem) => elem.item.id === newProduct.id);

		if (index === -1) {
			// Si no lo encuentra, agrega el pructo al carrito
			const listaItems = [...cartItem, { item: newProduct, quantity }];
			setCartItem(listaItems);
		} else {
			// Si lo encuentra, aumenta la cantidad
			const newListItems = cartItem.filter(
				(elem) => elem.item.id !== cartItem[index].item.id
			);
			const listaItems = [
				...newListItems,
				{
					item: cartItem[index].item,
					quantity: cartItem[index].quantity + quantity,
				},
			];
			setCartItem(listaItems);
		}
	};

	// Remover un item del cart por usando su ID
	const removeItem = (product) => {
		const newList = cartItem.filter((elem) => elem.item.id !== product.item.id);
		setCartItem(newList);
	};

	// Remueve todos los items
	const clear = () => {
		setCartItem([]);
	};

	return (
		<CartContext.Provider value={{ cartItem, addItem, removeItem, clear }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider };
