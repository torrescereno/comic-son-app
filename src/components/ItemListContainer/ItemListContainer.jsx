import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

export default function ItemListContainer({ titulo }) {
	const [productos, setProductos] = useState([]);
	const [load, setLoad] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		setLoad(true);
		const be = new Promise((res, rej) => {
			setTimeout(() => {
				res([
					{
						id: 1,
						titulo: "Producto 1",
						descripcion: "Descripcion 1",
						img:
							"https://www.flaticon.es/svg/vstatic/svg/1524/1524855.svg?token=exp=1617326168~hmac=ac35d9937c204b2648e4769e1029d37a",
						stock: 10,
						idCategoria: 1,
					},
					{
						id: 2,
						titulo: "Producto 2",
						descripcion: "Descripcion 2",
						img:
							"https://www.flaticon.es/svg/vstatic/svg/1524/1524855.svg?token=exp=1617326168~hmac=ac35d9937c204b2648e4769e1029d37a",
						stock: 9,
						idCategoria: 1,
					},
					{
						id: 3,
						titulo: "Producto 3",
						descripcion: "Descripcion 3",
						img:
							"https://www.flaticon.es/svg/vstatic/svg/1524/1524855.svg?token=exp=1617326168~hmac=ac35d9937c204b2648e4769e1029d37a",
						stock: 7,
						idCategoria: 2,
					},
					{
						id: 4,
						titulo: "Producto 4",
						descripcion: "Descripcion 4",
						img:
							"https://www.flaticon.es/svg/vstatic/svg/1524/1524855.svg?token=exp=1617326168~hmac=ac35d9937c204b2648e4769e1029d37a",
						stock: 10,
						idCategoria: 2,
					},
				]);
			}, 2000);
		});
		be.then((data) => {
			categoryId !== undefined
				? setProductos(
						data.filter((data) => data.idCategoria === parseInt(categoryId))
				  )
				: setProductos(data);
		})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoad(false);
			});
	}, [categoryId]);

	return (
		<div>
			<h1>
				{titulo} {categoryId}
			</h1>

			{load ? (
				<p>Cargado...</p>
			) : (
				<div className='item-container'>
					<ItemList productos={productos} />
				</div>
			)}
		</div>
	);
}
