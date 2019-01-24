import * as React from "react";
import { IGame, IGameSettings } from "../../models/Game";
import { FormControlLabel, Icon, IconButton, InputAdornment, Switch, TextField, Typography } from "@material-ui/core";
import { useMutation } from "react-apollo-hooks";
import { Mutations } from "../../gql";
import { useState } from "react";

interface IProps {
	game: IGame;
}

export const Settings = ({
	game: {
		_id,
		settings: { gameLength, spyCount, spyCollaboration },
	},
}: IProps) => {
	const [localGameLength, setLocalGameLength] = useState(gameLength);
	const changeSettings = useMutation<{ id: string }, { id?: string; settings?: IGameSettings }>(
		Mutations.CHANGE_SETTINGS,
		{ variables: { id: _id } }
	);

	const setSpyCount = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSpyCount = e.target.checked ? 2 : 1;
		changeSettings({ variables: { id: _id, settings: { gameLength, spyCollaboration, spyCount: newSpyCount } } });
	};

	const setGameLength = (newLength: number) => {
		setLocalGameLength(newLength);
		changeSettings({ variables: { id: _id, settings: { gameLength: newLength, spyCollaboration, spyCount } } });
	};

	const decrementLength = () => {
		setGameLength(Math.max(localGameLength - 60000, 60000));
	};

	const incrementLength = () => {
		setGameLength(Math.min(localGameLength + 60000, 60000 * 20));
	};

	return (
		<div>
			<Typography variant={"subtitle2"} color={"primary"}>
				Spy count
			</Typography>
			<FormControlLabel
				control={<Switch value="checkedC" onChange={setSpyCount} checked={spyCount === 2} />}
				label="2 Spies?"
			/>
			<div>
				<Typography variant={"subtitle2"} color={"primary"}>
					Game length
				</Typography>
				<IconButton onClick={decrementLength}>
					<Icon>remove</Icon>
				</IconButton>
				<Typography inline variant={"subtitle2"} color={"primary"}>
					{localGameLength / 60 / 1000}
				</Typography>
				<IconButton onClick={incrementLength}>
					<Icon>add</Icon>
				</IconButton>
			</div>
		</div>
	);
};
