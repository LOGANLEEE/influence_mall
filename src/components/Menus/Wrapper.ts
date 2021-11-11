import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;

	.MuiAppBar-root {
		background-color: ${({ theme }) => theme?.vely?.bg};
		color: white;
		font-size: 16px;
	}

	.MuiTabs-indicator {
		background-color: #fa93a3;
	}
`;
