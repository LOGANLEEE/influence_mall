import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	.header {
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-top: 10px;

		.guide {
			font-size: 16px;
		}

		.standard-date {
			color: silver;
		}
	}

	.estimate {
		margin-top: 5px;

		width: 90%;
		display: flex;
		font-size: 26px;
	}

	.menus {
		/* margin-top: 5px; */
		margin-bottom: 5px;
	}
`;
