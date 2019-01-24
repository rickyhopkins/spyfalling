import { GameStates, IGame } from "../../models/Game";
import { useSubscription } from "../../hooks/useSubscription";
import { Subscriptions } from "../../gql";
import { PlayingGame } from "./PlayingGame";
import { Accusation } from "./Accusation";
import { GameOutcome } from "./GameOutcome";
import { NewGame } from "./NewGame";
import React, { useState } from "react";

interface IProps {
	game: IGame;
}

export const SubscribedGame = ({ game: gameProp }: IProps) => {
	const [game, setGame] = useState<IGame>(gameProp);

	const onGameUpdated = ({
		subscriptionData: {
			data: { gameUpdated },
		},
	}: any) => {
		setGame(gameUpdated);
	};

	useSubscription<any, { id: string }>(Subscriptions.WATCH_GAME, {
		variables: { id: game._id },
		shouldResubscribe: false,
		onSubscriptionData: onGameUpdated,
	});

	switch (game.state) {
		case GameStates.ENDED:
			return <GameOutcome game={game} />;
		case GameStates.PLAYING:
			return <PlayingGame game={game} />;
		case GameStates.ACCUSING:
			return <Accusation game={game} />;
		default:
			return <NewGame game={game} />;
	}
};
