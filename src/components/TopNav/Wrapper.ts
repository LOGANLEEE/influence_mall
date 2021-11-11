import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${({ theme }) => theme?.vely?.bg};

	color: white;
	justify-content: center;
	align-items: center;
	height: 50px;

	.back-btn {
		position: absolute;
		left: 5px;
	}

	.title {
		font-size: 20px;
		font-weight: bold;
	}

	.more-btn {
		position: absolute;
		right: 5px;
	}
`;
