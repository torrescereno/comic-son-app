import React from 'react';
import './NavBar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

// Componente de función  
// Componente Container
export const navBarBoostrap = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="nav-brand">Comic-Son</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">Inicio</Nav.Link>
                    <NavDropdown title="Lista" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="">Primer Item</NavDropdown.Item>
                        <NavDropdown.Item href="">Segundo Item</NavDropdown.Item>
                        <NavDropdown.Item href="">Tercer Item</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

/* Componente de clases */
/* class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <h1>Navbar</h1>
        )
    }
} */

export default navBarBoostrap;