import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFirestore } from "../../firebase/firebase";

const useStyles = makeStyles({
	root: {
		marginTop: "15rem",
	},
});

export default function ItemDetailContainer() {
	const [item, setItem] = useState([]);
	const [load, setLoad] = useState(true);
	const { id } = useParams();
	const classes = useStyles();

	useEffect(() => {
		setLoad(true);
		const db = getFirestore();

		const itemCollection = db.collection("items");
		const item = itemCollection.doc(`${id}`);

		item
			.get()
			.then((doc) => {
				setItem({ ...doc.data(), id: doc.id });
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoad(false);
			});
	}, [id]);

	return (
		<div>
			{load ? (
				<div className={classes.root}>
					<CircularProgress />
				</div>
			) : (
				<div className='item-container'>
					<ItemDetail item={item} />
				</div>
			)}
		</div>
	);
}
