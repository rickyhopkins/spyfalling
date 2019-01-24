import React from "react";
import { RouteComponentProps } from "react-router";
import { Queries } from "../gql";
import { useQuery } from "react-apollo-hooks";
import { SubscribedGame } from "./game/SubscribedGame";
import { IGame } from "../models/Game";
import { GameHeader, GameWrapper } from "./game/styles";
import { Timer } from "./game/Timer";

interface IProps extends RouteComponentProps<{ gameId: string }> {}

export const Game = ({ match }: IProps) => {
	const { data } = useQuery<{ game?: IGame }, { id: string }>(Queries.GAME, {
		variables: { id: match.params.gameId },
	});

	if (!data || !data.game) return null;
	const { game } = data;

	return (
		<GameWrapper>
			<GameHeader variant={"h6"} align={"center"} gutterBottom>
				{game.name}
			</GameHeader>
			<SubscribedGame game={game} />
			<Timer game={game} />
		</GameWrapper>
	);
};
