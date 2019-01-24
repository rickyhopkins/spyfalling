import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import { NavLink as RRNavLink } from "react-router-dom";

export const NavHeader = styled(Typography as React.FunctionComponent)<TypographyProps>`
	flex-grow: 1;
	padding-right: ${({ theme }) => theme.spacing.unit * 2}px;
`;

export const NavLink = styled(RRNavLink)`
	text-decoration: none;
	color: inherit;
`;
