import { ContainerProps } from 'App';
import React from 'react';
import { Wrapper } from './Wrapper';

export const Template = ({ className }: ContainerProps) => {
	return <Wrapper className={className}>Template</Wrapper>;
};
