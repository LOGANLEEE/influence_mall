import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 140px;

	.info {
		margin-top: 10px;
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.name {
			font-size: 20px;
		}
		.intro {
			font-size: 15px;
		}
		.copy-btn {
			background: none;
		}
	}

	.buttons {
		margin-top: auto;
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.btn {
			width: 45%;
		}
	}
`;
