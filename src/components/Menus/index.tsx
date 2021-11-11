import { AppBar, Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
	active: number;
	handleActive: (e: SyntheticEvent, val: number) => void;
}

export const Menus = ({ className, active, handleActive }: Props) => {
	return (
		<Wrapper className={className}>
			<AppBar position='static'>
				<Tabs value={active} onChange={handleActive} textColor='inherit' variant='fullWidth'>
					<Tab label='일간' />
					<Tab label='월간' />
				</Tabs>
			</AppBar>
		</Wrapper>
	);
};
