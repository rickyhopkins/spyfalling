import {
	Button,
	Collapse,
	Divider,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Switch,
} from "@material-ui/core";
import React, { useState } from "react";
import { IGame } from "../../models/Game";
import { locations } from "../../config/locations";

interface IProps {
	game: IGame;
	hidden?: boolean;
}

export const LocationList = ({ hidden }: IProps) => {
	const [locationMap, updateLocationMap] = useState<{ [key: string]: boolean }>(
		Object.values(locations)
			.filter((location) => location.version === 1)
			.reduce((list, location) => ({ ...list, [location.name]: false }), {})
	);
	const [showCleared, setShowCleared] = useState(false);
	const toggleShowCleared = () => setShowCleared(!showCleared);

	const toggleLocation = (location: string) => () => {
		updateLocationMap({ ...locationMap, [location]: !locationMap[location] });
	};

	return (
		<List hidden={hidden}>
			{Object.keys(locationMap).map((location) => (
				<Collapse in={showCleared || !locationMap[location]}>
					<ListItem
						button
						selected={locationMap[location]}
						onClick={toggleLocation(location)}
						style={{ textDecoration: locationMap[location] ? "line-through" : "none" }}
					>
						<ListItemText primary={location} />
					</ListItem>
				</Collapse>
			))}
			<Divider />
			<ListItem divider>
				<ListItemText primary={"Show cleared locations"} />
				<ListItemSecondaryAction>
					<Switch onChange={toggleShowCleared} checked={showCleared} />
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	);
};
