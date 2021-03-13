import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Css
import "./NavBar.css";

// Import components
import CartWidget from "../CartWidget/CartWidget";

export default function navBarBoostrap() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='#home' className='nav-brand'>
				Comic-Son
			</Navbar.Brand>
			<Nav>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href=''>Inicio</Nav.Link>
						<NavDropdown title='Lista' id='collasible-nav-dropdown'>
							<NavDropdown.Item href=''>Primer Item</NavDropdown.Item>
							<NavDropdown.Item href=''>Segundo Item</NavDropdown.Item>
							<NavDropdown.Item href=''>Tercer Item</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Nav>
			<CartWidget />
		</Navbar>
	);
}
