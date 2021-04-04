import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

// Data
import { img } from "../../data";

import "./CartWidget.css";

export default function CartWidget() {
	const { cartItem } = useContext(CartContext);
	const [cantItem, setCantItem] = useState(0);

	useEffect(() => {
		const cont = cartItem.reduce((prev, next) => prev + next.quantity, 0);

		setCantItem(cont);
	}, [cartItem]);

	return (
		<Link to='/cart'>
			<img src={img} alt='carrito'></img>({cantItem})
		</Link>
	);
}
