import styled from "styled-components";
import * as React from "react";
import { Icon } from "@material-ui/core";
import { IconProps } from "@material-ui/core/Icon";

export const ButtonIcon = styled(Icon as React.FunctionComponent<IconProps>)<IconProps>`
	margin-left: 1rem;
`;
