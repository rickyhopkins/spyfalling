import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import * as React from "react";
import { useContext } from "react";
import { useInput } from "../../hooks/useInput";
import { ValidatedTextField } from "../ui/ValidatedTextField";
import { ValidatedForm } from "../ui/ValidatedForm";
import AuthenticationContext from "../../context/authentication";

interface IProps {
	active: boolean;
	hideModal(): void;
}

export const LoginModal = ({ active, hideModal }: IProps) => {
	const authContext = useContext(AuthenticationContext);
	const username = useInput<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("");

	const onModalClose = () => {
		username.onChange("");
		hideModal();
	};

	const createUser = () => {
		authContext.addUser && authContext.addUser(username.value);
	};

	return (
		<Dialog open={active} onClose={onModalClose}>
			<DialogTitle>Create a user</DialogTitle>
			<DialogContent>
				<DialogContentText>Choose a username</DialogContentText>
				<ValidatedForm onSubmit={createUser}>
					<ValidatedTextField label="Username" {...username} margin="normal" autoFocus required />
					<DialogActions>
						<Button variant="text" color="primary" type={"submit"}>
							Create user
						</Button>
					</DialogActions>
				</ValidatedForm>
			</DialogContent>
		</Dialog>
	);
};
