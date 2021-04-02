import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { eliminar } from "../../data";

const Cart = () => {
	const { cartItem, removeItem, clear } = useContext(CartContext);

	return (
		<div>
			<h3>Carrito</h3>

			<div className='container mt-5'>
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
				</div>

				{cartItem.length > 0 && (
					<div className='row w-100 d-flex justify-content-end'>
						<div className='col-auto'>
							<button
								onClick={() => {
									clear();
								}}
								className='btn btn-danger'
							>
								Limpiar carrito
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export { Cart };
