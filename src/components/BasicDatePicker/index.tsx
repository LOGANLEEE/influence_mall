import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { IconButton } from '@mui/material';
import krLocale from 'date-fns/locale/ko';
import React from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
	active?: number;
	setTime: (value: any) => void;
	time: Date | null;
	height?: number;
}

export const BasicDatePicker = ({ className, active = 0, setTime, time = new Date(), height }: Props) => {
	return (
		<Wrapper className={className} height={height}>
			<IconButton>
				<ArrowBackIosNewIcon fontSize='medium' />
			</IconButton>
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={krLocale}>
				<DatePicker
					disableFuture
					// label='기간 선택'
					mask='____._.__'
					openTo={active === 0 ? 'day' : 'month'}
					views={active === 0 ? ['year', 'month', 'day'] : ['year', 'month']}
					value={time}
					onChange={(newValue) => {
						setTime(newValue);
					}}
					// renderInput={(params) => <TextField {...params} />}
					renderInput={({ inputRef, inputProps, InputProps }) => (
						<span className='cutsom-date-picker'>
							<input ref={inputRef} {...inputProps} />
							{/* {InputProps?.endAdornment} */}
						</span>
					)}
				/>
			</LocalizationProvider>
			<IconButton>
				<ArrowForwardIosIcon fontSize='medium' />
			</IconButton>
		</Wrapper>
	);
};
