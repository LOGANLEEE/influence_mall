import styled from 'styled-components';

interface Props {
	height?: number;
}

export const Wrapper = styled.div<Props>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${({ height }) => (height ? `${height}px` : '100%')};
`;
