import { Avatar, Button, IconButton } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import dummyImage from 'assets/dummy.jpg';
import defaultAvatar from 'assets/default-avatar.jpg';
import { Brick } from 'components/Brick';
import { BasicModal } from 'components/Modal/BasicModal';
import { BasicAlert } from 'components/Alert/BasicAlert';

import { ProductList } from 'components/ProductList';
import { ContainerProps } from 'App';
import { Wrapper } from './Wrapper';

export const Market = ({ className }: ContainerProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const closeModal = useCallback(() => setIsOpen(false), []);
	const openModal = useCallback(() => setIsOpen(true), []);

	const [isAlert, setIsAlert] = useState(false);
	const closeAlert = useCallback(() => setIsAlert(false), []);
	const openAlert = useCallback(() => setIsAlert(true), []);

	const copyButton = useCallback(
		() => (
			<Button variant='contained' color='secondary' onClick={openAlert}>
				복사하기
			</Button>
		),
		[],
	);

	return (
		<>
			<Wrapper className={className}>
				<div className='cover-image'>
					<img src={dummyImage} alt='default background ' height={350} loading='lazy' />
				</div>
				<Avatar alt='default avatar' src={defaultAvatar} sx={{ width: 90, height: 90 }} className='profile-avatar' />

				<div className='info'>
					<span className='market-name'>서블릿 군자점</span>
					<span className='market-desc'>케블 뭐시기뭐시기 일자목 뭐시기뭐시기 </span>
					<div className='share-buttons'>
						<IconButton>
							<FacebookIcon sx={{ width: 30, height: 30 }} />
						</IconButton>
						<IconButton>
							<TwitterIcon sx={{ width: 30, height: 30 }} />
						</IconButton>
						<IconButton>
							<YouTubeIcon sx={{ width: 30, height: 30 }} />
						</IconButton>
						<IconButton>
							<InstagramIcon sx={{ width: 30, height: 30 }} />
						</IconButton>
						<Button variant='contained' onClick={openModal}>
							공유
						</Button>
					</div>
				</div>
				<Brick />
				<ProductList />
			</Wrapper>
			<BasicModal isOpen={isOpen} closeModal={closeModal} title='공유하기' guide='https://www.google.com' onClick={copyButton} />
			<BasicAlert open={isAlert} onClose={closeAlert}>
				링크가 복사되었습니다.
			</BasicAlert>
		</>
	);
};
