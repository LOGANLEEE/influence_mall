import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { StyledBackDrop, StyledModal, Wrapper } from './Wrapper';

interface Props {
	className?: string;
	isOpen: boolean;
	title: string;
	guide: string;
	onClick?: () => void;
	closeModal: () => void;
}

export const BasicModal = ({ className, isOpen, closeModal, title, guide, onClick }: Props) => {
	return (
		<Wrapper className={className}>
			<StyledModal open={isOpen} onClose={closeModal} BackdropComponent={StyledBackDrop}>
				<div className='contents'>
					<Typography className='title'>{title}</Typography>
					<Typography className='guide' sx={{ mt: 2 }}>
						{guide}
					</Typography>
					<div className='buttons'>
						<Button variant='contained' sx={{ marginRight: 2 }} onClick={closeModal}>
							취소
						</Button>
						{onClick ? (
							onClick()
						) : (
							<Button variant='contained' color='secondary'>
								확인
							</Button>
						)}
					</div>
				</div>
			</StyledModal>
		</Wrapper>
	);
};
