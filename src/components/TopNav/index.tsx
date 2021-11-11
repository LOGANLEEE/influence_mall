import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { BasicModal } from 'components/Modal/BasicModal';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Wrapper';

interface Props {
	useBack?: boolean;
	title?: string;
}

export const TopNav = React.memo(({ useBack = true, title = '마켓 관리자' }: Props) => {
	const { goBack, push } = useHistory();

	const [openModal, setOpenModal] = useState(false);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const closeMenu = () => {
		setAnchorEl(null);
	};

	const closeLogoutModal = useCallback(() => {
		setOpenModal(false);
	}, []);

	const openLogoutModal = () => setOpenModal(true);

	const doLogout = useCallback(
		() => (
			<Button variant='contained' color='secondary' onClick={() => push('/auth/login')}>
				확인
			</Button>
		),
		[],
	);

	return (
		<>
			<Wrapper>
				{useBack && (
					<IconButton onClick={goBack} className='back-btn'>
						<ArrowBackIosNewIcon fontSize='medium' />
					</IconButton>
				)}
				<span className='title'>{title}</span>

				<div className='more-btn'>
					<IconButton onClick={openMenu}>
						<MoreHorizIcon />
					</IconButton>

					<Menu anchorEl={anchorEl} open={open} onClose={closeMenu} sx={{ zIndex: '1' }}>
						<MenuItem>회원 정보 수정</MenuItem>
						<MenuItem onClick={openLogoutModal}>로그아웃</MenuItem>
					</Menu>
				</div>
			</Wrapper>
			<BasicModal isOpen={openModal} closeModal={closeLogoutModal} title='로그아웃' guide='로그아웃 하시겠습니까?' onClick={doLogout} />
		</>
	);
});

TopNav.displayName = 'TopNav';
