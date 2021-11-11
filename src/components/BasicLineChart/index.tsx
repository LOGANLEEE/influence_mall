import React, { memo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { numberWithThousandSeperator } from 'utils';
import { Wrapper } from './Wrapper';

interface LineChartData {
	[key: string]: any;
}

interface Props {
	className?: string;
	data: LineChartData[];
	xKey: string;
	yKey: string;
	xTickFormatter?: (value: any, index: number) => string;
	yTickFormatter?: (value: any, index: number) => string;
	toolTipFormatter?: (value: any) => any;
	dataKey: string;
	height?: number;
}

export const BasicLineChart = memo(({ className, data, xKey, yKey, height, dataKey, xTickFormatter, yTickFormatter, toolTipFormatter }: Props) => {
	return (
		<Wrapper className={className} height={height}>
			<ResponsiveContainer>
				<LineChart
					data={data}
					margin={{
						top: 15,
						right: 15,
						left: 15,
						bottom: 15,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey={xKey} padding={{ left: 30, right: 30 }} tickFormatter={xTickFormatter} />
					<YAxis dataKey={yKey} tickFormatter={yTickFormatter} />
					<Tooltip formatter={toolTipFormatter} />

					{/* <Legend /> */}
					<Line type='monotone' dataKey={dataKey} stroke='pink' activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</Wrapper>
	);
});

BasicLineChart.displayName = 'BasicLineChart';
