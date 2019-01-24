import React from "react";
import { Game } from "./Game";
import { List } from "@material-ui/core";
import { useQuery } from "react-apollo-hooks";
import { Queries } from "../gql";

export const GameList = () => {
	const res = useQuery<{ openGames: any[] }>(Queries.OPEN_GAMES);

	const { data } = res;

	if (!data || !data.openGames) return null;

	return <List>{data.openGames.map((game) => <Game game={game} />)}</List>;
};
