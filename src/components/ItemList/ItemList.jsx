import Item from "../Item/Item";

export default function ItemList({ productos = [] }) {
	return (
		<>
			{productos.map((p) => (
				<Item producto={p} />
			))}
		</>
	);
}
