import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	width: 100%;
	height: 400px;

	.summary {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 90%;
		margin: 3% 0 0 0;
		margin-bottom: 10px;

		.date {
			font-size: 18px;
			color: silver;
		}

		.revenue {
			font-size: 22px;
			font-weight: bold;
		}
	}
`;
