/* CONTENIDO DEMO SE BORRAR CUANDO TENGA UN DESEÑO PARA LOS ITEMS */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* NO SE USARA BOOTSTRAP PARA EL PROYECTO */
import Card from "react-bootstrap/Card";

const Item = ({ producto }) => {
	return (
		<Card className='item-card'>
			<Card.Img className='item-card-img' variant='top' src={producto.img} />
			<Card.Body className='item-card-body'>
				<Card.Title>{producto.titulo}</Card.Title>
				<Card.Text>{producto.descripcion}</Card.Text>

				<Link to={`/comics/${producto.id}`}>DETALLE</Link>
			</Card.Body>
		</Card>
	);
};

const ItemList = ({ productos = [] }) => {
	return (
		<>
			{productos.map((p) => (
				<Item key={p.id} producto={p} />
			))}
		</>
	);
};

const ItemListView = ({ titulo }) => {
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const be = new Promise((res, rej) => {
			setTimeout(() => {
				res([
					{
						id: 1,
						titulo: "Producto 1",
						descripcion: "Descripcion 1",
						img: "./img/comic.svg",
					},
					{
						id: 2,
						titulo: "Producto 2",
						descripcion: "Descripcion 2",
						img: "./img/comic.svg",
					},
					{
						id: 3,
						titulo: "Producto 3",
						descripcion: "Descripcion 3",
						img: "./img/comic.svg",
					},
				]);
			}, 2000);
		});
		be.then((data) => {
			setProductos(data);
		}).catch((err) => console.log(err));
	});

	return (
		<div>
			<h1>{titulo}</h1>
			<div className='item-container'>
				<ItemList productos={productos} />
			</div>
		</div>
	);
};

export { ItemListView };
