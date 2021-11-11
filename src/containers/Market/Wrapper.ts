import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* min-height: 100vh; */

	.cover-image {
		width: 100vw;
		img {
			width: 100%;
		}
	}
	.profile-avatar {
		z-index: 1;
		position: absolute;
		top: 350px;
	}

	.info {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		text-align: center;

		.market-name {
			font-weight: bold;
			font-size: 20px;
		}

		.market-desc {
			margin-top: 20px;
		}

		.share-buttons {
			margin-top: 20px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
`;
