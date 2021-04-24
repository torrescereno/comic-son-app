import { NavBar } from "../atoms/NavBar";
import { Anchor } from "../atoms/Anchor";

// Agrergar la cantidad de productos seleccionnados entre parentesis ()

const Menu = ({ open, setOpen }) => {
	return (
		<NavBar open={open} onClick={() => setOpen(!open)}>
			<Anchor to='/'>Home</Anchor>
			<Anchor to='/comics'>Comics</Anchor>
			<Anchor to='/nosotros'>Nosotros</Anchor>
			<Anchor to='/contacto'>Contacto</Anchor>
			<Anchor to='/carrito'>Carrito (2)</Anchor>
		</NavBar>
	);
};

export { Menu };
