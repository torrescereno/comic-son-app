import React, { useContext, useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import firebase from "firebase/app";
import "firebase/firestore";
import { Link } from "react-router-dom";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 50vh;
	width: 100%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		width: "35%",
		marginTop: "1.5rem",

		"& > *": {
			margin: "0.5rem",
		},
	},
}));

const FormContainer = () => {
	const { cartItem, clear } = useContext(CartContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const classes = useStyles();
	const [orderId, setOrderId] = useState(null);
	const [load, setLoad] = useState(false);

	const onSubmit = async (buyer) => {
		const db = getFirestore();
		const orders = db.collection("orders");
		const newOrder = {
			buyer: {
				name: buyer.name,
				phone: buyer.phone,
				email: buyer.email,
			},
			items: cartItem,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: cartItem.reduce(
				(prev, next) => prev + next.quantity * next.item.precio,
				0
			),
		};

		try {
			setLoad(true);
			const { id } = await orders.add(newOrder);
			setOrderId(id);

			// Actualizar stock
			const itemsToUpdate = db.collection("items").where(
				firebase.firestore.FieldPath.documentId(),
				"in",
				cartItem.map((i) => i.item.id)
			);

			const query = await itemsToUpdate.get();
			const batch = db.batch();

			const outOfStock = [];
			query.docs.forEach((docSnapshot, idx) => {
				if (docSnapshot.data().stock >= cartItem[idx].quantity) {
					batch.update(docSnapshot.ref, {
						stock: docSnapshot.data().stock - cartItem[idx].quantity,
					});
				} else {
					outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
				}
			});

			if (outOfStock.length === 0) {
				await batch.commit();
			}

			// Vaciar carrito
			clear();
			setLoad(false);
		} catch (error) {
			console.log(error);
		}
	};

	if (orderId && cartItem.length === 0) {
		return (
			<Container>
				<h1>Gracias por su compra</h1>
				<p>Numero de orden {orderId}</p>
			</Container>
		);
	}

	if (cartItem.length === 0) {
		return (
			<Container>
				<h3 className='mt-5'>Carrito vacío</h3>
				<Link className='btn btn-dark' to='/'>
					Volver al menu
				</Link>
			</Container>
		);
	}

	return (
		<Container>
			{load ? (
				<div className={classes.circle}>
					<CircularProgress />
				</div>
			) : (
				<>
					<h1>Formulario de compra</h1>
					<Form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
						<TextField
							{...register("name", { required: "Campo obligatorio" })}
							id='name'
							label='Nombre'
							type='text'
						/>
						{errors.name && errors.name.message}

						<TextField
							{...register("phone", {
								required: "Campo obligatorio",
								minLength: { value: 9, message: "Debe contener 9 digitos" },
								maxLength: { value: 9, message: "Debe contener 9 digitos" },
							})}
							id='phone'
							label='Telefono'
							type='number'
						/>
						{errors.phone && errors.phone.message}
						<TextField
							{...register("email", { required: "Campo obligatorio" })}
							id='email'
							label='Correo'
							type='email'
						/>
						{errors.email && errors.email.message}
						<Button type='submit' variant='contained'>
							Comprar
						</Button>
					</Form>
				</>
			)}
		</Container>
	);
};

export { FormContainer };
