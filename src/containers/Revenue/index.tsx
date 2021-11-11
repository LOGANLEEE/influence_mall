import { ContainerProps } from 'App';
import { BasicDatePicker } from 'components/BasicDatePicker';
import { BasicLineChart } from 'components/BasicLineChart';
import { BasicTable, BasicTableHeader, BasicTableRow } from 'components/BasicTable';
import { Brick } from 'components/Brick';
import { Caution } from 'components/Caution';
import { Menus } from 'components/Menus';
import React, { SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { numberWithThousandSeperator } from 'utils';
import { Wrapper } from './Wrapper';

export const Revenue = ({ className }: ContainerProps) => {
	const { push } = useHistory();
	const [active, setActive] = useState(0);
	const [time, setTime] = React.useState<Date | null>(new Date());

	const handleActive = useCallback((e: SyntheticEvent, val: number) => setActive(val), []);

	const dailyHeader: BasicTableHeader[] = useMemo(
		() => [
			{ name: '상품', dataKey: 'productName' },
			{ name: '거래 내역', dataKey: 'sold', render: (v) => `₩ ${numberWithThousandSeperator(v)}` },
			{ name: '추정 수입', dataKey: 'expectation', render: (v) => `₩ ${numberWithThousandSeperator(v)}` },
		],
		[],
	);
	const dailyRow: BasicTableRow[] = [
		{ id: 1, productName: '인진쑥', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 2, productName: '크림', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 3, productName: '엘릭서', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 4, productName: '파랑 포션', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 5, productName: '하양 포션', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
	];

	const monthlyHeader: BasicTableHeader[] = useMemo(
		() => [
			{ name: '일', dataKey: 'day' },
			{ name: '거래 내역', dataKey: 'sold', render: (v) => `₩ ${numberWithThousandSeperator(v)}` },
			{ name: '추정 수입', dataKey: 'expectation', render: (v) => `₩ ${numberWithThousandSeperator(v)}` },
		],
		[],
	);

	const monthlyRow: BasicTableRow[] = [
		{ id: 1, day: '10.10', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 2, day: '10.11', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 3, day: '10.12', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 4, day: '10.13', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
		{ id: 5, day: '10.14', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000) },
	];

	const data = [
		{
			id: 1,
			date: '10.10',
			revenue: Math.round(Math.random() * 1000000),
		},
		{ id: 2, date: '10.11', revenue: Math.round(Math.random() * 1000000) },
		{
			id: 3,
			date: '10.12',
			revenue: Math.round(Math.random() * 1000000),
		},
		{
			id: 4,
			date: '10.13',
			revenue: Math.round(Math.random() * 1000000),
		},
		{ id: 5, date: '10.14', revenue: Math.round(Math.random() * 1000000) },
		{ id: 6, date: '10.15', revenue: Math.round(Math.random() * 1000000) },
		{ id: 7, date: '10.16', revenue: Math.round(Math.random() * 1000000) },
	];

	return (
		<Wrapper className={className}>
			<div className='header' onClick={() => push('/revenue/detail')} role='button' tabIndex={0}>
				<span className='guide'>당월 지급 추정 금액</span>
				<span className='standard-date'>2021.01.01 기준</span>
			</div>
			<div className='estimate' onClick={() => push('/revenue/detail')} role='button' tabIndex={0}>
				₩{numberWithThousandSeperator(3579000)}
			</div>
			<Brick />
			<BasicDatePicker active={active} setTime={setTime} time={time} height={30} />
			<br />
			<Menus className='menus' active={active} handleActive={handleActive} />
			<br />
			{active === 0 && <BasicTable rows={dailyRow} headers={dailyHeader} />}
			{active === 1 && (
				<>
					<BasicLineChart
						data={data}
						xKey='date'
						yKey='revenue'
						dataKey='revenue'
						height={250}
						yTickFormatter={(value: number) => numberWithThousandSeperator(value)}
						toolTipFormatter={(value: number) => numberWithThousandSeperator(value)}
					/>
					<BasicTable rows={monthlyRow} headers={monthlyHeader} height={200} />
				</>
			)}

			<Caution list={['추정 수입은 주문상태에 따라 변동 될 수 있습니다.', '구매취소, 반품된 주문 건은 추정 수입에서 제외됩니다.']} />
		</Wrapper>
	);
};
