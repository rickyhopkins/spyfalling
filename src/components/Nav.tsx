import React from "react";
import { UserNav } from "./UserNav";
import { NavHeader, NavLink } from "./nav/styles";
import { AppBar, Toolbar } from "@material-ui/core";

export const Nav = () => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<NavHeader variant="h6" color="inherit">
					<NavLink to={"/"}>Spyfalling</NavLink>
				</NavHeader>
				<UserNav />
			</Toolbar>
		</AppBar>
	);
};
