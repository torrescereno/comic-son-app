import { NavBar } from "../atoms/NavBar";
import { Anchor } from "../atoms/Anchor";

const Menu = ({ open, setOpen }) => {
	return (
		<NavBar open={open} onClick={() => setOpen(!open)}>
			<Anchor to='/'>Home</Anchor>
			<Anchor to='/comics'>Comics</Anchor>
			<Anchor to='/nosotros'>Nosotros</Anchor>
			<Anchor to='/contacto'>Contacto</Anchor>
			<Anchor to='/carrito'>Carrito</Anchor>
		</NavBar>
	);
};

export { Menu };
