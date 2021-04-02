import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import "./ItemDetail.css";

export default function ItemDetail({ item }) {
	const [count, setCount] = useState(0);

	const addHandler = (contador) => {
		setCount(contador);
	};

	return (
		<div className='item-card card '>
			<img
				className='item-card-img card-img-top'
				variant='top'
				alt='producto'
				src={item?.img}
			/>
			<div className='item-card-body card-body'>
				<h5 className='card-title'>
					<p>{item?.titulo}</p>
				</h5>
				<p className='card-text'>{item?.descripcion}</p>
			</div>

			{count === 0 ? (
				<ItemCount cantidad={item?.stock} inicial='0' onAdd={addHandler} />
			) : (
				<div>
					<Link to='/cart' className='done'>
						Terminar compra
					</Link>
				</div>
			)}
		</div>
	);
}
