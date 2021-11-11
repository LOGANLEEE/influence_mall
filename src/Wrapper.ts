import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;

	tspan {
		font-size: 13px;
	}

	.MuiButton-root {
		color: ${({ theme }) => theme?.vely?.fg};
		background-color: ${({ theme }) => theme?.vely?.bg};
		font-weight: bold;

		&:active,
		&:focus,
		&.active,
		&:focus-within,
		&:visited,
		&:focus-visible,
		&:hover {
			background-color: ${({ theme }) => theme?.vely?.bg};
			color: ${({ theme }) => theme?.vely?.fg};
			font-weight: bold;
		}
	}
`;
