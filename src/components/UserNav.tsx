import * as React from "react";
import { useContext, useState } from "react";
import AuthenticationContext from "../context/authentication";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useToggle } from "../hooks/useToggle";
import { LoginButton } from "./user/LoginButton";
import { UserNavAvatar } from "./userNav/styles";
import { UserAvatar } from "./user/UserAvatar";

export const UserNav: React.FunctionComponent = () => {
	const { user } = useContext(AuthenticationContext);
	const [avatarEl, setAvatarEl] = useState<HTMLElement | undefined>(undefined);
	const [menuActive, showMenu, hideMenu] = useToggle(false);

	const onAvatarClick = (e: React.MouseEvent<HTMLElement>) => {
		setAvatarEl(e.currentTarget);
		showMenu();
	};

	const logout = () => {
		hideMenu();
	};

	if (user) {
		return (
			<>
				<Typography variant={"h6"} color={"inherit"} noWrap>
					{user.name}
				</Typography>
				<UserNavAvatar onClick={onAvatarClick}>
					<UserAvatar user={user} />
				</UserNavAvatar>
				<Menu open={menuActive} onClose={hideMenu} anchorEl={avatarEl}>
					<MenuItem onClick={logout}>Logout</MenuItem>
				</Menu>
			</>
		);
	}

	return <LoginButton />;
};
