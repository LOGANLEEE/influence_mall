import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { ContainerProps } from 'App';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Wrapper';

export const Login = ({ className }: ContainerProps) => {
	const { push } = useHistory();
	const doLogin = useCallback(() => push('/'), []);

	return (
		<Wrapper className={className}>
			<div className='header'>
				<span className='brand-name'>VELY VELY</span>
				<span className='desc'>마켓 관리자 로그인</span>
			</div>
			<Box component='form' noValidate autoComplete='off' onSubmit={doLogin}>
				<TextField placeholder='아이디' size='medium' variant='outlined' margin='normal' fullWidth />
				<TextField placeholder='비밀번호' size='medium' variant='outlined' margin='normal' fullWidth />
				<Button variant='contained' size='large' type='submit' className='submit-button'>
					Login
				</Button>
			</Box>
		</Wrapper>
	);
};
