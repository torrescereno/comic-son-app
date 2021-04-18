import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { eliminar } from "../../data";

// Aca solo contendra la información de los prodictos que se escogieron

const Cart = () => {
	const { cartItem, removeItem, clear } = useContext(CartContext);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const sub = cartItem.reduce(
			(prev, next) => prev + next.quantity * next.item.precio,
			0
		);

		setTotal(sub);
	}, [cartItem]);

	return (
		<div>
			{cartItem.length === 0 && (
				<div>
					<h3 className='mt-5'>Carrito vacío</h3>
					<Link className='btn btn-dark' to='/'>
						Volver al menu
					</Link>
				</div>
			)}

			{cartItem.length > 0 && (
				<>
					<h3 className='mt-5'>Carrito</h3>

					<div className='container mt-5'>
						<div className='row w-100 d-flex justify-content-end  mb-3'>
							<div className='col-auto'>
								<button className='btn btn-dark mr-3'>
									<Link to='/order'>Finalizar compra</Link>
								</button>
								<button
									onClick={() => {
										clear();
									}}
									className='btn btn-danger'
								>
									Limpair
								</button>
							</div>
						</div>
						<div className='row'>
							<table className='table table-light'>
								<thead>
									<tr>
										<th scope='col'>ID</th>
										<th scope='col'>Titulo</th>
										<th scope='col'>Cantidad</th>
										<th scope='col'>Subtotal</th>
										<th scope='col'>Accion</th>
									</tr>
								</thead>
								<tbody>
									{cartItem.map((p) => (
										<tr key={p.item.id}>
											<th scope='row'>{p.item.id}</th>
											<td>{p.item.titulo}</td>
											<td>{p.quantity}</td>
											<td>{p.quantity * p.item.precio}</td>
											<td>
												<img
													src={eliminar}
													alt='Borrar'
													onClick={() => removeItem(p)}
												/>
											</td>
										</tr>
									))}
								</tbody>
							</table>

							<div className='container d-flex justify-content-end'>
								<div className='row col-4'>
									<h6>Total ${total}</h6>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export { Cart };
