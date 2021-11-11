import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;

	.left {
		display: flex;
		align-items: end;

		justify-content: flex-start;
		width: 80%;

		.title {
			font-size: 20px;
			font-weight: bold;
			margin-right: 1%;
		}
		.sub {
			font-size: 14px;
		}
	}

	.right {
		display: flex;
		align-items: end;
		justify-content: flex-end;
		width: 20%;

		.detail-btn {
			background: none;
		}
	}
`;
