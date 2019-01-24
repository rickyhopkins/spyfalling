import styled, { css, keyframes } from "../../../styles/styled-components";

const rotate = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

export const IconVector = styled.svg<{ loading: boolean }>`
	height: 2rem;
	width: 2rem;
	${({ loading }) =>
		loading &&
		css`
			animation: ${rotate} 0.6s linear infinite;
		`};
`;
