import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// Css
import "./NavBar.css";

// Import components
import CartWidget from "../CartWidget/CartWidget";

export default function navBarBoostrap() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand className='nav-brand'>
				<Link className='link' to='/'>
					Comic-Son
				</Link>
			</Navbar.Brand>

			<Nav>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<NavDropdown title='Categorias' id='collasible-nav-dropdown'>
							<NavDropdown.Item>
								<Link className='dropdown-item' to='/category/1'>
									Categoria 1
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link className='dropdown-item' to='/category/2'>
									Categoria 2
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Nav>
			<CartWidget />
		</Navbar>
	);
}
