import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

// data
import { comics } from "../../data";

// css
import "./ItemListContainer.css";

export default function ItemListContainer({ titulo }) {
	const [productos, setProductos] = useState([]);
	const [load, setLoad] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		setLoad(true);

		const be = new Promise((res, rej) => {
			setTimeout(() => {
				res(comics);
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
