import React, { useState } from "react";
import { Game } from "./Game";
import { List } from "@material-ui/core";
import { Subscriptions } from "../gql";
import { useSubscription } from "../hooks/useSubscription";
import { IGame } from "../models/Game";

interface IProps {
	games?: IGame[];
}

export const GameList = ({ games = [] }: IProps) => {
	const [openGames, setOpenGames] = useState(games);

	const onGameUpdated = ({ subscriptionData: { data } }: any) => {
		console.log(data.openGames);
		setOpenGames([...openGames, ...data.openGames]);
	};

	useSubscription<{ openGames: IGame[] }>(Subscriptions.OPEN_GAMES, {
		shouldResubscribe: false,
		onSubscriptionData: onGameUpdated,
	});

	return <List>{openGames.map((game) => <Game game={game} />)}</List>;
};
