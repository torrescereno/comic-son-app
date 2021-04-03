import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// data
import { comics } from "../../data";

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
		const be = new Promise((res, rej) => {
			setTimeout(() => {
				res(comics);
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
