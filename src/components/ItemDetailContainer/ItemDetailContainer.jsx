import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
	const [item, setItem] = useState([]);
	const [load, setLoad] = useState(true);
	const { id } = useParams();

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
					},
					{
						id: 2,
						titulo: "Producto 2",
						descripcion: "Descripcion 2",
						img:
							"https://www.flaticon.es/svg/vstatic/svg/1524/1524855.svg?token=exp=1617326168~hmac=ac35d9937c204b2648e4769e1029d37a",
						stock: 9,
					},
					{
						id: 3,
						titulo: "Producto 3",
						descripcion: "Descripcion 3",
						img:
							"https://www.flaticon.es/svg/vstatic/svg/1524/1524855.svg?token=exp=1617326168~hmac=ac35d9937c204b2648e4769e1029d37a",
						stock: 7,
					},
					{
						id: 4,
						titulo: "Producto 4",
						descripcion: "Descripcion 4",
						img:
							"https://www.flaticon.es/svg/vstatic/svg/1524/1524855.svg?token=exp=1617326168~hmac=ac35d9937c204b2648e4769e1029d37a",
						stock: 10,
					},
				]);
			}, 2000);
		});
		be.then((data) => {
			data.map((data) => {
				if (data.id === parseInt(id)) setItem(data);
				return data;
			});
		})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoad(false);
			});
	}, [id]);

	return (
		<div>
			{load ? (
				<p>Cargado...</p>
			) : (
				<div className='item-container'>
					<ItemDetail item={item} />
				</div>
			)}
		</div>
	);
}
