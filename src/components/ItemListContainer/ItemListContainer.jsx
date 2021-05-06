import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFirestore } from "../../firebase/firebase";
import { Animated } from "react-animated-css";

// css
import "./ItemListContainer.css";

const useStyles = makeStyles({
	root: {
		paddingTop: "2rem",
	},
	circle: {
		marginTop: "15rem",
	},
});

export default function ItemListContainer() {
	const [productos, setProductos] = useState([]);
	const [load, setLoad] = useState(true);
	const [titulo, setTitulo] = useState("Comics");
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

			if (categoryId === "1") {
				setTitulo("DC");
			} else {
				setTitulo("Marvel");
			}
		} else {
			itemCollection = db.collection("items");
			setTitulo("Comics");
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
		<div className={classes.root}>
			{load ? (
				<div className={classes.circle}>
					<CircularProgress />
				</div>
			) : (
				<Animated animationIn='bounceInLeft' isVisible={true}>
					<div className='container-fluid w-100'>
						<h1 className='mt-5'>{titulo}</h1>

						<div className='row d-flex w-100 justify-content-center align-content-center col-12 m-0 p-0'>
							<ItemList productos={productos} />
						</div>
					</div>
				</Animated>
			)}
		</div>
	);
}
