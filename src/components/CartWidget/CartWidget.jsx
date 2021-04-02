import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// Data
import { img } from "../../data";

import "./CartWidget.css";

export default function CartWidget() {
	return (
		<Navbar.Collapse className='justify-content-end'>
			<Navbar.Text>
				<Link to='/cart'>
					<img src={img} alt='carrito'></img>
				</Link>
			</Navbar.Text>
		</Navbar.Collapse>
	);
}
