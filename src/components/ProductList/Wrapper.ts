import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 95%;

	img {
		border-radius: 5px;
	}

	.desc {
		display: flex;
		flex-direction: row;
		align-items: center;

		.sale_price {
			margin-left: 10px;
		}
	}
`;
