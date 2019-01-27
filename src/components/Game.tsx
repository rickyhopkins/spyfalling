import React, { useContext, useState } from "react";
import { IGame } from "../models/Game";
import { Icon, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from "@material-ui/core";
import AuthenticationContext from "../context/authentication";
import { Redirect } from "react-router";
import { pluralize } from "../util/TextHelpers";
import { useMutation } from "react-apollo-hooks";
import { Mutations } from "../gql";

interface IProps {
	game: IGame;
}

export const Game = ({ game }: IProps) => {
	console.log(game);
	const { user } = useContext(AuthenticationContext);
	const joinGame = useMutation(Mutations.JOIN_GAME);
	const [joined, setJoined] = useState(false);

	const onClick = () => {
		if (!user) return;
		joinGame({ variables: { id: game._id } });
		setJoined(true);
	};

	if (joined) return <Redirect to={`/${game._id}`} />;

	const playerCount = game.players.length;

	return (
		<ListItem divider>
			<ListItemText primary={game.name} secondary={pluralize(playerCount, "player")} />
			<ListItemSecondaryAction>
				<Tooltip title="Join game">
					<IconButton onClick={onClick}>
						<Icon>person_add</Icon>
					</IconButton>
				</Tooltip>
			</ListItemSecondaryAction>
		</ListItem>
	);
};
