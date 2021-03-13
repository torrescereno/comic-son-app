import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

// Css
import './CartWidget.css'

class CartWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <img src="carrito.svg"></img>
                </Navbar.Text>
            </Navbar.Collapse>
        );
    }
}

export default CartWidget;