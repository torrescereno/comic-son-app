import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

// Llamada a la api
const getItem = fetch("https://api.jikan.moe/v3/anime/1");

export default function ItemDetailContainer() {
	const [item, setItem] = useState();
	useEffect(() => {
		getItem
			.then((response) => response.json())
			.then((data) => setItem(data))
			.catch((err) => console.log(err));
	}, []);

	return <ItemDetail item={item} />;
}
