import React, { useState } from "react";
import { useInput } from "../hooks/useInput";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Icon,
	TextField,
} from "@material-ui/core";
import { useToggle } from "../hooks/useToggle";
import { Fab } from "./ui/Fab";
import { useMutation } from "react-apollo-hooks";
import { Mutations } from "../gql";
import { Redirect } from "react-router";

export const NewGame = () => {
	const createGameMutation = useMutation(Mutations.CREATE_GAME);
	const gameName = useInput("");
	const [id, setId] = useState<string | undefined>(undefined);
	const [modalActive, showModal, hideModal] = useToggle();

	const createGame = async (e: React.FormEvent) => {
		e.preventDefault();

		const {
			data: { createGame },
		} = await createGameMutation({
			variables: { name: gameName.value },
		});

		setId(createGame._id);
	};

	if (id) {
		return <Redirect to={`/${id}`} />;
	}

	return (
		<>
			<Fab color={"primary"} onClick={showModal}>
				<Icon>add</Icon>
			</Fab>
			<Dialog open={modalActive} onClose={hideModal}>
				<DialogTitle>Start new game</DialogTitle>
				<DialogContent>
					<form onSubmit={createGame}>
						<DialogContentText>Give your new game a name</DialogContentText>
						<TextField
							label="Game name"
							{...gameName as any}
							margin="normal"
							autoFocus
							fullWidth
							required
						/>
						<DialogActions>
							<Button variant="text" color="primary" type={"submit"}>
								Start
							</Button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
};
