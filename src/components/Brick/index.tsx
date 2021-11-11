import React from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const Brick = ({ className }: Props) => {
	return <Wrapper className={className} />;
};
