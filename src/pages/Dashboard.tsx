import React from "react";
import { NewGame } from "../components/NewGame";
import { GameList } from "../components/GameList";

const Dashboard = () => {
	return (
		<div>
			<GameList />
			<NewGame />
		</div>
	);
};

export default Dashboard;
