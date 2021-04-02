import { Link } from "react-router-dom";

import "./Item.css";

export default function Item({ producto }) {
	return (
		<div className='item-card card'>
			<img
				className='item-card-img card-img-top'
				variant='top'
				alt='producto'
				src={producto.img}
			/>
			<div className='item-card-body card-body'>
				<h5 className='card-title'>
					<Link className='item-link' to={`/item/${producto.id}`}>
						{producto.titulo}
					</Link>
				</h5>
				<p className='card-text'>{producto.descripcion}</p>
			</div>
		</div>
	);
}
