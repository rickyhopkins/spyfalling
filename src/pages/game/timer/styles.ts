import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { CircularProgressProps } from "@material-ui/core/CircularProgress";

export const TimerWrapper = styled.div`
	position: fixed;
	top: 4rem;
	right: 1rem;
	color: ${({ theme }) => theme.palette.primary.main};
	& button {
		background-color: #fff;
	}
`;

export const TimerProgress = styled(CircularProgress as React.FunctionComponent<CircularProgressProps>)`
	position: absolute;
	left: 0;
	&& {
		transform: scaleX(-1) rotate(-90deg) !important;
	}
`;
