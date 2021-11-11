import { BasicLineChart } from 'components/BasicLineChart';
import { Brick } from 'components/Brick';
import { CompHeader } from 'components/CompHeader';
import React from 'react';
import { numberWithThousandSeperator } from 'utils';
import { Wrapper } from './Wrapper';

const data = [
	{
		name: '6월',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '7월',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '8월',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '9월',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '10월',
		revenue: Math.round(Math.random() * 1000000),
	},
	{
		name: '11월',
		revenue: Math.round(Math.random() * 1000000),
	},
];

export const MonthlyRevenue = () => {
	return (
		<Wrapper>
			<CompHeader title='월별 추정 수익' sub='(지난 6개월)' useDetail='/revenue' />
			<div className='summary'>
				<span className='date'>2021.11</span>
				<span className='revenue'>₩100,000</span>
			</div>
			<BasicLineChart
				data={data}
				xKey='name'
				yKey='revenue'
				dataKey='revenue'
				yTickFormatter={(value: number) => numberWithThousandSeperator(value)}
				toolTipFormatter={(value: number) => numberWithThousandSeperator(value)}
			/>
		</Wrapper>
	);
};
