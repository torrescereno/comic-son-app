import React from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetailView = () => {
	let { id } = useParams();

	return (
		<div>
			<p>Se describen los deatalles del item con id {id}</p>
			<Link to='/comics'>Volver a la laista de productos</Link>
		</div>
	);
};

export { ItemDetailView };
