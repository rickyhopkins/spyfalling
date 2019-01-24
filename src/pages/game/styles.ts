import styled from "styled-components";
import { BottomNavigation, Typography } from "@material-ui/core";
import { BottomNavigationProps } from "@material-ui/core/BottomNavigation";
import { TypographyProps } from "@material-ui/core/Typography";

export const GameWrapper = styled.div`
	margin-bottom: 3.5rem;
`;

export const GameBottomNavigation = styled(BottomNavigation as React.FunctionComponent<BottomNavigationProps>)`
	position: fixed;
	bottom: 0;
	width: 100%;
`;

export const GameHeader = styled(Typography as React.FunctionComponent<TypographyProps>)`
	&& {
		margin-top: 1rem;
	}
`;
