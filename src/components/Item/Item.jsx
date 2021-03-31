import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.css";

export default function Item({ producto }) {
	return (
		<Card className='item-card'>
			<Card.Img className='item-card-img' variant='top' src={producto.img} />
			<Card.Body className='item-card-body'>
				<Card.Title>
					<Link to={`/item/${producto.id}`}>{producto.titulo}</Link>
				</Card.Title>
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
