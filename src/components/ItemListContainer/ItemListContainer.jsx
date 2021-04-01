import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

export default function ItemListContainer({ titulo }) {
	const [productos, setProductos] = useState([]);
	const { categoryId } = useParams();

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
						idCategoria: 1,
					},
					{
						id: 2,
						titulo: "Prodcuto 2",
						descripcion: "Descripcion 2",
						img: "producto.svg",
						stock: 9,
						idCategoria: 1,
					},
					{
						id: 3,
						titulo: "Prodcuto 3",
						descripcion: "Descripcion 3",
						img: "producto.svg",
						stock: 7,
						idCategoria: 2,
					},
					{
						id: 4,
						titulo: "Prodcuto 4",
						descripcion: "Descripcion 4",
						img: "producto.svg",
						stock: 0,
						idCategoria: 2,
					},
				]);
			}, 100);
		});
		be.then((data) => {
			if (categoryId === undefined) {
				setProductos(data);
			} else {
				const arrayCategory = data.filter(
					(data) => data.idCategoria === parseInt(categoryId)
				);
				setProductos(arrayCategory);
			}
		}).catch((err) => console.log(err));
	}, [categoryId]);

	return (
		<div>
			{console.log(productos)}

			<h1>
				{titulo} {categoryId}
			</h1>
			<div className='item-container'>
				<ItemList productos={productos} />
			</div>
		</div>
	);
}
