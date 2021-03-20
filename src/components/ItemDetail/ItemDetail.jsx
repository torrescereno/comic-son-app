import React from "react";

export default function ItemDetail({ item }) {
	return (
		<div>
			<p>{item?.title}</p>
			<p>{item?.premiered}</p>
			<p>{item?.title_japanese}</p>
		</div>
	);
}
