import React, { memo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Wrapper } from './Wrapper';

export interface BasicTableRow {
	[key: string]: any;
}
export interface BasicTableHeader {
	name: string;
	dataKey: string;
	render?: (value: any, row: BasicTableRow) => void;
}

interface Props {
	className?: string;
	rows: BasicTableRow[];
	headers: BasicTableHeader[];
	height?: number;
}

export const BasicTable = memo(({ className, rows, headers, height }: Props) => {
	return (
		<Wrapper className={className} height={height}>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							{headers?.map(({ name }, idx) => (
								<TableCell key={name} align={idx === 0 ? 'left' : 'right'}>
									{name}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows?.map((row) => (
							<TableRow key={`${row?.id}`}>
								{headers?.map(({ dataKey, render }, idx) => (
									<TableCell key={`${row?.id}${idx}`} align={idx === 0 ? 'left' : 'right'}>
										{render ? render(row[dataKey], row) : row[dataKey]}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Wrapper>
	);
});

BasicTable.displayName = 'BasicTable';
