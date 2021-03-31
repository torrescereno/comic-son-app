import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

// Css
import "./ItemCount.css";

export default function ItemCount({ onAdd, cantidad, inicial }) {
	const [count, setCount] = useState(parseInt(inicial));
	const [stock, setstock] = useState(parseInt(cantidad));

	useEffect(() => {
		setCount(parseInt(inicial));
		return;
	}, [inicial]);

	const agregarProducto = () => {
		setCount(count + 1);
		setstock(stock - 1);
	};

	const quitaProducto = () => {
		setCount(count - 1);
		setstock(stock + 1);
	};

	return (
		<>
			<Card.Body className='item-card-footer'>
				<button
					type='button'
					disabled={count <= 0}
					className='btn btn-danger'
					onClick={quitaProducto}
				>
					Quitar
				</button>
				<div>{count}</div>
				<button
					type='button'
					disabled={count >= cantidad}
					className='btn btn-success'
					onClick={agregarProducto}
				>
					Agregar
				</button>
			</Card.Body>
			<Card>
				<button
					type='button'
					className='btn btn-outline-primary'
					disabled={count <= 0}
				>
					Agregar al carrito
				</button>
			</Card>
		</>
	);
}
