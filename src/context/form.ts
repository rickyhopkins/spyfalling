import React from "react";

interface IFormContext {
	submitted: boolean;
	valid: boolean;
	setValidity(valid: boolean): void;
}

const FormContext = React.createContext<IFormContext>({ submitted: false, valid: false, setValidity: () => undefined });

export default FormContext;
