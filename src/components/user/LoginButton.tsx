import { Button } from "@material-ui/core";
import * as React from "react";
import { useToggle } from "../../hooks/useToggle";
import { LoginModal } from "./LoginModal";

export const LoginButton = () => {
	const [modalActive, showModal, hideModal] = useToggle();

	return (
		<>
			<Button color="inherit" onClick={showModal}>
				Create user
			</Button>
			<LoginModal active={modalActive} hideModal={hideModal} />
		</>
	);
};
