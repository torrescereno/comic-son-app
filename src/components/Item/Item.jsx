import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.css";

export default function Item({ producto }) {
	return (
		<Card className='item-card'>
			<Card.Img className='item-card-img' variant='top' src={producto.img} />
			<Card.Body class='item-card-body'>
				<Card.Title>{producto.titulo}</Card.Title>
				<Card.Text>{producto.descripcion}</Card.Text>
			</Card.Body>

			{producto.stock > 0 ? (
				<ItemCount cantidad={producto.stock} inicial='0' onAdd='' />
			) : (
				<p>No hay productos</p>
			)}
		</Card>
	);
}
