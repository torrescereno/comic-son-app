import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

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
					<Link to={`/item/${producto.id}`}>{producto.titulo}</Link>
				</h5>
				<p className='card-text'>{producto.descripcion}</p>
			</div>

			{producto.stock > 0 ? (
				<ItemCount cantidad={producto.stock} inicial='0' onAdd='' />
			) : (
				<p>No hay productos</p>
			)}
		</div>
	);
}
