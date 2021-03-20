import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

export default function ItemListContainer({ titulo }) {
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const be = new Promise((res, rej) => {
			setTimeout(() => {
				res([
					{
						id: 1,
						titulo: "Prodcuto 1",
						descripcion: "Descripcion 1",
						img: "producto.svg",
						stock: 10,
					},
					{
						id: 2,
						titulo: "Prodcuto 2",
						descripcion: "Descripcion 2",
						img: "producto.svg",
						stock: 9,
					},
					{
						id: 3,
						titulo: "Prodcuto 3",
						descripcion: "Descripcion 3",
						img: "producto.svg",
						stock: 7,
					},
					{
						id: 4,
						titulo: "Prodcuto 4",
						descripcion: "Descripcion 4",
						img: "producto.svg",
						stock: 0,
					},
				]);
			}, 2000);
		});
		be.then((data) => {
			setProductos(data);
		}).catch((err) => console.error);
	});

	return (
		<div>
			<h1>{titulo}</h1>
			<div className='item-container'>
				<ItemList productos={productos} />
			</div>
		</div>
	);
}
