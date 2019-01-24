import { BottomNavigationAction, Icon } from "@material-ui/core";
import { GameBottomNavigation } from "./styles";
import React, { useState } from "react";
import { IGame } from "../../models/Game";
import { PlayerList } from "./PlayerList";
import { RoleButton } from "./RoleButton";
import { LocationList } from "./LocationList";

interface IProps {
	game: IGame;
}

export const PlayingGame = ({ game }: IProps) => {
	const [tab, setTab] = useState(2);

	const changeTab = (_: React.ChangeEvent<{}>, newTab: number) => setTab(newTab);

	return (
		<>
			<LocationList hidden={tab !== 0} game={game} />
			<PlayerList hidden={tab !== 1} game={game} />
			<div hidden={tab !== 2}>
				<RoleButton game={game} />
			</div>
			<GameBottomNavigation value={tab} onChange={changeTab}>
				<BottomNavigationAction label="Locations" icon={<Icon>location_on</Icon>} />
				<BottomNavigationAction label="Players" icon={<Icon>person</Icon>} />
				<BottomNavigationAction label="Actions" icon={<Icon>more_vert</Icon>} />
			</GameBottomNavigation>
		</>
	);
};
