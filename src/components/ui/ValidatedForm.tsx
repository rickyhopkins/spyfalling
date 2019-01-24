import React from "react";
import FormContext from "../../context/form";
import { useState } from "react";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const ValidatedForm: React.FunctionComponent<IProps> = ({ children, onSubmit, ...formProps }) => {
	const [formState, changeFormState] = useState({ submitted: false, valid: false });

	const setValidity = () => undefined;

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit && onSubmit(e);
	};

	return (
		<form {...formProps} onSubmit={submitForm}>
			<FormContext.Provider value={{ ...formState, setValidity }}>{children}</FormContext.Provider>
		</form>
	);
};
