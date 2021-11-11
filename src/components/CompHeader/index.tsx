import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
	title: string;
	sub: string;
	useDetail?: string;
}

export const CompHeader = ({ title, sub, useDetail = '', className }: Props) => {
	const { push } = useHistory();

	const pushToDetail = useCallback(() => useDetail && push(useDetail), [useDetail]);

	return (
		<Wrapper className={className} onClick={pushToDetail}>
			<span className='left'>
				<span className='title'>{title}</span>
				<span className='sub'>{sub}</span>
			</span>
			{useDetail && (
				<span className='right'>
					<Link to={useDetail}>
						<IconButton className='detail-btn'>
							<ArrowForwardIosIcon fontSize='small' />
						</IconButton>
					</Link>
				</span>
			)}
		</Wrapper>
	);
};
