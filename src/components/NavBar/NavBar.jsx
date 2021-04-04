import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../context/CartContext";

const useStyles = makeStyles(() => ({
	navContainer: {
		display: `flex`,
		justifyContent: `space-between`,
	},

	linkNav: {
		color: "white",
	},
}));

const NavBar = () => {
	const classes = useStyles();
	const { cartItem } = useContext(CartContext);

	return (
		<div>
			<AppBar position='static'>
				<Toolbar className={classes.navContainer}>
					<div>
						<IconButton edge='start' color='inherit' aria-label='home'>
							<Link to='/'>
								<Home />
							</Link>
						</IconButton>

						<Button>
							<Link to='/category/1' className={classes.linkNav}>
								DC
							</Link>
						</Button>
						<Button>
							<Link to='/category/2' className={classes.linkNav}>
								Marvel
							</Link>
						</Button>
					</div>

					{cartItem.length > 0 && (
						<Button>
							<CartWidget />
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export { NavBar };
