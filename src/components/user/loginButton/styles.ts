import styled from "styled-components";
import { Paper } from "@material-ui/core";
import { PaperProps } from "@material-ui/core/Paper";

export const LoginModalWrapper = styled.div`
	position: absolute;
	display: flex;
	height: 100%;
	width: 100%;
	pointer-events: none;
`;

export const LoginModalContent = styled(Paper as React.FunctionComponent)<PaperProps>`
	display: grid;
	grid-template-columns: 1fr;
	padding: ${({ theme }) => theme.spacing.unit * 4}px;
	margin: auto;
	pointer-events: all;
`;
