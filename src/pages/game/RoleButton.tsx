import * as React from "react";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useToggle } from "../../hooks/useToggle";
import { IGame } from "../../models/Game";
import { useContext } from "react";
import AuthenticationContext from "../../context/authentication";
import { isSpy } from "../../util/GameHelpers";

interface IProps {
	game: IGame;
}

export const RoleButton = ({ game }: IProps) => {
	const [roleVisible, showRole, hideRole] = useToggle(false);
	const { user } = useContext(AuthenticationContext);

	if (!user) return <React.Fragment />;

	const player = game.players.find(({ player }) => player._id === user._id);

	const location = isSpy(game, user) ? "You are the spy, figure it out" : game.location;
	const role = player ? player.gameRole : "You are not even playing!";

	return (
		<>
			<Dialog open={roleVisible} onClose={hideRole}>
				<DialogTitle>My role</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<b>Location:</b> {location}
					</DialogContentText>
					<DialogContentText>
						<b>Role:</b> {role}
					</DialogContentText>
				</DialogContent>
			</Dialog>
			<Button onClick={showRole}>Show my role</Button>
		</>
	);
};
