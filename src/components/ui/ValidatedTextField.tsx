import { TextField } from "@material-ui/core";
import * as React from "react";
import { TextFieldProps } from "@material-ui/core/TextField";

interface IProps {}

export const ValidatedTextField = (props: IProps & TextFieldProps) => {
	return <TextField {...props} />;
};
