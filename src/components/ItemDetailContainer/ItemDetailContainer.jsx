import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

// data
import { comics } from "../../data";

export default function ItemDetailContainer() {
	const [item, setItem] = useState([]);
	const [load, setLoad] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		setLoad(true);
		const be = new Promise((res, rej) => {
			setTimeout(() => {
				res(comics);
			}, 100);
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
