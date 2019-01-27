import React from "react";
import { NewGame } from "../components/NewGame";
import { GameList } from "../components/GameList";
import { useQuery } from "react-apollo-hooks";
import { Queries } from "../gql";

const Dashboard = () => {
	const { data } = useQuery<{ openGames: any[] }>(Queries.OPEN_GAMES);

	return (
		<div>
			<GameList games={data && data.openGames} />
			<NewGame />
		</div>
	);
};

export default Dashboard;
