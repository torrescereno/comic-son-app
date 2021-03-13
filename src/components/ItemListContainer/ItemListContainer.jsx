import React from "react";
import "./ItemListContainer.css";

export default function ItemListContainer(props) {
	return (
		<div>
			<h1>{props.titulo}</h1>
			<div className='item-container'>{props.children}</div>
		</div>
	);
}
