import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
	const [item, setItem] = useState([]);
	const { id } = useParams();

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
			data.map((data) => {
				if (data.id === parseInt(id)) setItem(data);
				return data;
			});
		}).catch((err) => console.log(err));
	}, [id]);

	return (
		<div>
			Item seleccionado {id}
			<ItemDetail item={item} />
		</div>
	);
}
