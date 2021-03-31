import React from "react";

export default function ItemDetail({ item }) {
	return (
		<div>
			<br />
			<p>{item?.titulo}</p>
			<p>{item?.descripcion}</p>
		</div>
	);
}
