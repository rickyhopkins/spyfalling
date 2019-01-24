import React from "react";
import { GameStates, IGame } from "../../models/Game";
import { Typography } from "@material-ui/core";

interface IProps {
	game: IGame;
}

export const GameOutcome = ({ game }: IProps) => {
	if (!game.spy) return <Typography variant={"body1"}>Oops, there was no spy</Typography>;
	const spies = game.players
		.filter(({ gameRole }) => gameRole === "spy")
		.map(({ player }) => player.name)
		.join(" and ");

	if (game.state === GameStates.SPY_WINS) {
		return (
			<Typography variant={"body1"} align={"center"}>
				It was {spies} the whole time!
			</Typography>
		);
	}
	return (
		<Typography variant={"body1"} align={"center"}>
			{spies} was found guilty of being a spy!
		</Typography>
	);
};
