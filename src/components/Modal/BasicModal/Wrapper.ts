import styled from 'styled-components';
import ModalUnstyled from '@mui/core/ModalUnstyled';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const StyledModal = styled(ModalUnstyled)`
	display: flex;
	width: 100vw;
	height: 100vh;

	.contents {
		z-index: 3;
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: ${({ theme }) => theme?.vely?.bg};
		color: white;
		transform: translate(-50%, -50%);
		width: 90%;
		box-shadow: 24;
		padding: 3%;
		border-radius: 5px;
		text-align: center;

		.title {
			font-weight: bold;
		}

		.guide {
		}

		.buttons {
			margin-top: 20px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.MuiButton-root {
				color: ${({ theme }) => theme?.vely?.fg};
				background-color: ${({ theme }) => theme?.vely?.bg};
				font-weight: bold;

				&:active,
				&:focus,
				&.active,
				&:focus-within,
				&:visited,
				&:focus-visible,
				&:hover {
					background-color: ${({ theme }) => theme?.vely?.bg};
					color: ${({ theme }) => theme?.vely?.fg};
					font-weight: bold;
				}
			}
			.MuiButton-containedSecondary {
				background-color: white;
				color: ${({ theme }) => theme?.vely?.bg};
				font-weight: bold;
			}
		}
	}
`;
export const StyledBackDrop = styled('div')`
	z-index: 2;
	position: fixed;
	width: 100vw;
	height: 100vh;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: transparent;
`;
