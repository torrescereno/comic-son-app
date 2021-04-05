import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFirestore } from "../../firebase/firebase";

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

		const db = getFirestore();
		let itemCollection;

		if (categoryId !== undefined) {
			itemCollection = db
				.collection("items")
				.where("idCategoria", "==", categoryId);
		} else {
			itemCollection = db.collection("items");
		}

		itemCollection
			.get()
			.then((querySnapshot) => {
				setProductos(
					querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
				);
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
