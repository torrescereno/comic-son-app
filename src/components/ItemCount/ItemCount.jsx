import React, { useEffect, useState } from "react";

import "./ItemCount.css";

export default function ItemCount({ cantidad, inicial, onAdd }) {
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

	const agregar = () => {
		onAdd(count);
	};

	return (
		<>
			<div className='item-card-footer card-body'>
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
			</div>
			<div className='card-body'>
				<button
					type='button'
					className='btn btn-outline-primary'
					disabled={count <= 0}
					onClick={agregar}
				>
					Agregar al carrito
				</button>
			</div>
		</>
	);
}
