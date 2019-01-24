import React, { useContext, useState } from "react";
import { GameStates, IGame, IPlayer } from "../../models/Game";
import {
	Icon,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	Menu,
	MenuItem,
} from "@material-ui/core";
import { UserAvatar } from "../../components/user/UserAvatar";
import AuthenticationContext from "../../context/authentication";

interface IProps {
	game: IGame;
	hidden?: boolean;
}

export const PlayerList = ({ game, hidden }: IProps) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
	const [activePlayer, setActivePlayer] = useState<IPlayer | undefined>(undefined);
	const { user } = useContext(AuthenticationContext);

	if (!user) return <>Not logged in</>;

	const removeFromGame = () => {
		if (!activePlayer) return;
		hideMenu();
	};

	const accuse = () => {
		if (!activePlayer) return;
		hideMenu();
	};

	const showMenu = (player: IPlayer) => (e: React.MouseEvent<HTMLElement>) => {
		setActivePlayer(player);
		setAnchorEl(e.currentTarget);
	};

	const hideMenu = () => {
		setActivePlayer(undefined);
		setAnchorEl(undefined);
	};

	return (
		<>
			<List hidden={hidden}>
				{Object.values(game.players).map(({ player }) => (
					<ListItem>
						<ListItemAvatar>
							<UserAvatar user={player} />
						</ListItemAvatar>
						<ListItemText primary={player.name} />
						{!user._id &&
							user._id !== player._id && (
								<ListItemSecondaryAction>
									<IconButton onClick={showMenu(player)}>
										<Icon>more_vert</Icon>
									</IconButton>
								</ListItemSecondaryAction>
							)}
					</ListItem>
				))}
			</List>
			<Menu open={!!anchorEl} onClose={hideMenu} anchorEl={anchorEl}>
				{game.state === GameStates.NEW &&
					user._id === game.host && <MenuItem onClick={removeFromGame}>Remove</MenuItem>}
				{game.state === GameStates.PLAYING && <MenuItem onClick={accuse}>Accuse</MenuItem>}
			</Menu>
		</>
	);
};
