import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// data
import { comics } from "../../data";

// css
import "./ItemListContainer.css";

const useStyles = makeStyles({
	root: {
		marginTop: "15rem",
	},
});

export default function ItemListContainer({ titulo }) {
	const [productos, setProductos] = useState([]);
	const [load, setLoad] = useState(true);
	const { categoryId } = useParams();
	const classes = useStyles();

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
			{load ? (
				<div className={classes.root}>
					<CircularProgress />
				</div>
			) : (
				<>
					<h1 className='mt-5'>
						{titulo} {categoryId}
					</h1>

					<div className='item-container'>
						<ItemList productos={productos} />
					</div>
				</>
			)}
		</div>
	);
}
