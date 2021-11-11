import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	.image-holder {
		margin-top: 2.5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 90%;

		img {
			margin-top: 2.5%;
			margin-bottom: 2.5%;
			width: 100%;
			height: 250px;
		}
	}

	.desc {
		display: flex;
		width: 90%;
		justify-content: center;
		font-size: 14px;
	}

	.product-info {
		border-radius: 5px;
		border: 1px solid ${({ theme }) => theme?.vely?.bg};
		padding: 10px 5px;
		display: flex;
		width: 90%;
		justify-content: center;
		img {
			border-radius: 5px;
			width: 60px;
			height: 60px;
			margin-right: 5px;
		}

		.info {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-self: center;

			.name {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: 14px;
				font-weight: bold;
			}

			.price {
				font-size: 12px;
			}
		}

		.sale {
			align-self: center;
			width: 30%;
			display: flex;
			flex-direction: column;
			text-align: center;

			.text {
				font-size: 14px;
			}

			.percentage {
				font-weight: bold;
				color: red;
			}
		}
	}
`;
