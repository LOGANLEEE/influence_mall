import { CompHeader } from 'components/CompHeader';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import React from 'react';
import { numberWithThousandSeperator } from 'utils';
import { Brick } from 'components/Brick';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}
const data = [
	{
		name: '인진쑥',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '크림',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '아이라이너',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '조삼모사',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '로션',
		revenue: Math.round(Math.random() * 1000000),
	},
];

export const MostProfiableProduct = ({ className }: Props) => {
	return (
		<Wrapper className={className}>
			<CompHeader className='header' title='최고 수입 상품' sub='(10월)' useDetail='/revenue' />
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart
					layout='vertical'
					width={500}
					height={300}
					data={data}
					margin={{
						top: 15,
						right: 15,
						left: 15,
						bottom: 15,
					}}>
					{/* <CartesianGrid strokeDasharray='3 3' /> */}
					<XAxis
						dataKey='revenue'
						type='number'
						tickFormatter={(value: number) => numberWithThousandSeperator(value)}
						reversed
						allowDataOverflow
					/>
					<YAxis dataKey='name' type='category' />
					<Tooltip formatter={(value: number) => numberWithThousandSeperator(value)} />

					{/* <Legend /> */}
					<Bar dataKey='revenue' fill='pink' />
				</BarChart>
			</ResponsiveContainer>
		</Wrapper>
	);
};
