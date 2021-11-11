import { ContainerProps } from 'App';
import { Brick } from 'components/Brick';
import { MonthlyRevenue } from 'components/MonthlyRevenue';
import { MostProfiableProduct } from 'components/MostProfiableProduct';
import { Profile } from 'components/Profile';
import React from 'react';
import { Wrapper } from './Wrapper';

export const Main = ({ className }: ContainerProps) => {
	return (
		<Wrapper className={className}>
			<Profile />
			<Brick />
			<MonthlyRevenue />
			<Brick />
			<MostProfiableProduct />
		</Wrapper>
	);
};
