import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./CartWidget.css";

export default function CartWidget() {
	return (
		<Navbar.Collapse className='justify-content-end'>
			<Navbar.Text>
				<Link to='/cart'>
					<img
						src='https://www.flaticon.com/svg/vstatic/svg/1170/1170576.svg?token=exp=1617329646~hmac=f7f2b982fc087f8d96eba13807e12d30'
						alt='carrito'
					></img>
				</Link>
			</Navbar.Text>
		</Navbar.Collapse>
	);
}
