import React from "react";
import Navbar from "react-bootstrap/Navbar";

// Css
import "./CartWidget.css";

export default function CartWidget() {
	return (
		<Navbar.Collapse className='justify-content-end'>
			<Navbar.Text>
				<img src='carrito.svg' alt='carrito'></img>
			</Navbar.Text>
		</Navbar.Collapse>
	);
}
