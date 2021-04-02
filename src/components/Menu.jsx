import { NavBar } from "./NavBar";
import { Anchor } from "./Anchor";

const Menu = ({ open, setOpen }) => {
	return (
		<NavBar open={open} onClick={() => setOpen(!open)}>
			<Anchor to='/'>Home</Anchor>
			<Anchor to='/comics'>Comics</Anchor>
			<Anchor to='/nosotros'>Nosotros</Anchor>
			<Anchor to='/contacto'>Contacto</Anchor>
			<Anchor to='/carrito'>Carrito</Anchor>
			<Anchor to='/login'>Login</Anchor>
		</NavBar>
	);
};

export { Menu };
