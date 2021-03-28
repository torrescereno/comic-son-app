import React, { useState } from "react";
import { Burger } from "../atoms/Burger";
import { Menu } from "../molecules/Menu";

const NavigationView = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
		</div>
	);
};

export { NavigationView };
