import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
	ul: {
		"& .MuiPaginationItem-root": {
			color: "#fff",
			marginTop: "1rem",
			marginBottom: "1rem",
		},
	},
	root: {
		maxWidth: 345,
		margin: "1rem",
		color: "white",
		paddingTop: ".5rem",
		background: "#0D0C1D",
		border: "1px solid white",
	},
	media: {
		height: "300px",
		width: "300px",
		/* paddingTop: "56.25%", */
		cursor: "pointer",
	},
	footer: {
		color: "white",
	},
	laoding: {
		marginTop: "15rem",
	},
}));

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: white;
`;

const Title = styled.div`
	margin-top: 5rem;
`;

const Wraper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	margin-top: 2rem;
	align-items: center;
	justify-items: center;
	width: 100%;
	min-height: 50vh;
`;

const ItemListView = () => {
	const [page, setPage] = React.useState(1);
	const { categoryId } = useParams();
	const [productos, setProductos] = useState([]);
	const [load, setLoad] = useState(true);
	const handleChange = (event, value) => {
		setPage(value);
	};
	const classes = useStyles();

	// Efecto para hacer la llamada a firebase
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
		const usersPerPage = 5;
		const pagesVisited = (page - 1) * usersPerPage;

		itemCollection
			.get()
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));

				setProductos(data.slice(pagesVisited, pagesVisited + usersPerPage));
			})

			.catch((err) => console.log(err))
			.finally(() => {
				setLoad(false);
			});
	}, [page, categoryId]);

	return (
		<Container>
			<Title>
				<h1>Comics</h1>
			</Title>
			<Wraper>
				{load ? (
					<div className={classes.loading}>
						<CircularProgress />
					</div>
				) : (
					productos.map((p) => (
						<Card key={p.id} className={classes.root}>
							<CardMedia
								className={classes.media}
								image={p.img}
								title='Paella dish'
							/>
							<CardHeader title={p.titulo} />
							<CardContent>
								<Typography
									className={classes.footer}
									variant='body2'
									color='textSecondary'
									component='p'
								>
									$ {p.precio}
								</Typography>
							</CardContent>
						</Card>
					))
				)}
			</Wraper>
			<Pagination
				classes={{ ul: classes.ul }}
				count={2}
				color='primary'
				variant='outlined'
				shape='rounded'
				page={page}
				onChange={handleChange}
			/>
		</Container>
	);
};

export { ItemListView };
