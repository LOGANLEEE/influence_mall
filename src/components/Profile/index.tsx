import Button from '@mui/material/Button';
// import ButtonUnstyled from '@mui/core/ButtonUnstyled';

import React, { useCallback, useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';

import Avatar from '@mui/material/Avatar';

import { Alert, IconButton, Snackbar, Tooltip } from '@mui/material';
import { BasicAlert } from 'components/Alert/BasicAlert';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Wrapper';

export const Profile = () => {
	const { push } = useHistory();

	const [isAlert, setIsAlert] = useState(false);
	const closeAlert = useCallback(() => setIsAlert(false), []);
	const openAlert = useCallback(() => setIsAlert(true), []);

	const [isToolTip, setIsToolTip] = useState(false);
	const closeToolTip = useCallback(() => setIsToolTip(false), []);
	const openToolTip = useCallback(() => setIsToolTip(true), []);

	const toMarket = useCallback(() => push('/market'), []);

	return (
		<>
			<Wrapper>
				<div className='info'>
					<div>
						<div className='name'>
							서블리 군자점
							<IconButton className='copy-btn' onClick={openAlert}>
								<ContentCopyIcon />
							</IconButton>
						</div>

						<div className='intro'>안녕하세요. 제 이름은 서블리입니다...</div>
					</div>
					<div>
						{/* // ! todo fix position problem */}
						<Tooltip title='마켓 프로필 이미지를 등록하실 수 있습니다.' open={isToolTip} onClose={closeToolTip} onClick={openToolTip}>
							<Avatar sx={{ width: 52, height: 52 }}>
								<PersonIcon sx={{ width: 46, height: 46 }} />
							</Avatar>
						</Tooltip>
					</div>
				</div>
				<div className='buttons'>
					<Button className='btn' variant='contained' onClick={toMarket}>
						마켓 상품 관리
					</Button>
					<Button className='btn' variant='contained'>
						마켓 정보 관리
					</Button>
				</div>
			</Wrapper>
			<BasicAlert open={isAlert} autoHideDuration={2000} onClose={closeAlert} severity='info'>
				마켓 주소가 복사 되었습니다.
			</BasicAlert>
		</>
	);
};
