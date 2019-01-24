import styled from "styled-components";
import { Modal } from "@material-ui/core";
import * as React from "react";
import { ModalProps } from "@material-ui/core/Modal";

export const FlexModal = styled(Modal as React.FunctionComponent<ModalProps>)<ModalProps>`
	display: flex;
`;
