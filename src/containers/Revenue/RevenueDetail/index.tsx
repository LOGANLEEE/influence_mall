import { ContainerProps } from 'App';
import { BasicDatePicker } from 'components/BasicDatePicker';
import { BasicTable, BasicTableHeader, BasicTableRow } from 'components/BasicTable';
import { Brick } from 'components/Brick';
import { Caution } from 'components/Caution';
import React, { useMemo } from 'react';
import { numberWithThousandSeperator } from 'utils';
import { Wrapper } from './Wrapper';

export const RevenueDetail = ({ className }: ContainerProps) => {
	const [time, setTime] = React.useState<Date | null>(new Date());
	const monthlyHeader: BasicTableHeader[] = useMemo(
		() => [
			{ name: '월', dataKey: 'day' },
			{ name: '거래 내역', dataKey: 'sold', render: (v) => `₩ ${numberWithThousandSeperator(v)}` },
			{ name: '추정 수입', dataKey: 'expectation', render: (v) => `₩ ${numberWithThousandSeperator(v)}` },
			{ name: '지급 완료', dataKey: 'isPaid' },
		],
		[],
	);

	const monthlyRow: BasicTableRow[] = [
		{ id: 1, day: '10.10', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000), isPaid: '예정' },
		{ id: 2, day: '10.11', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000), isPaid: '예정' },
		{ id: 3, day: '10.12', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000), isPaid: '완료' },
		{ id: 4, day: '10.13', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000), isPaid: '완료' },
		{ id: 5, day: '10.14', sold: Math.round(Math.random() * 1000000), expectation: Math.round(Math.random() * 1000000), isPaid: '완료' },
	];
	return (
		<Wrapper className={className}>
			<BasicDatePicker setTime={setTime} time={time} height={50} />
			<Brick />
			<BasicTable rows={monthlyRow} headers={monthlyHeader} height={350} />
			<br />
			<Caution list={['당월 확정된 수입은 익월 10일 일괄 지급됩니다.', '확정된 수입은 구매확정된 주문 건을 의미합니다.']} />
		</Wrapper>
	);
};
