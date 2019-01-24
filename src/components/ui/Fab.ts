import styled from "styled-components";
import * as React from "react";
import MuiFab, { FabProps } from "@material-ui/core/Fab/Fab";

export const Fab = styled(MuiFab as React.FunctionComponent<FabProps>)<FabProps>`
	&& {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
	}
`;
