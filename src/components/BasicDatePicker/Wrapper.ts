import styled from 'styled-components';

interface Props {
	height?: number;
}

export const Wrapper = styled.div<Props>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${({ height }) => (height ? `${height}px` : '100%')};

	.cutsom-date-picker {
		input {
			border: none;
			text-align: center;
			font-size: 20px;
			width: 150px;
		}
	}
`;
