import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.header {
		display: flex;
		flex-direction: column;
		text-align: center;
		.brand-name {
			font-size: 50px;
			font-weight: bold;
		}
		.desc {
			font-size: 25px;
		}
	}

	form {
		display: flex;
		width: 90%;
		flex-direction: column;

		.submit-button {
			margin-top: 16px;
			height: 56px;
		}
	}
`;
