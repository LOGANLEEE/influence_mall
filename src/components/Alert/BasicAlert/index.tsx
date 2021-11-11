import { Alert, AlertProps, Snackbar, SnackbarOrigin } from '@mui/material';
import React, { Component } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	open: boolean;
	className?: string;
	vertical?: SnackbarOrigin['vertical'];
	horizontal?: SnackbarOrigin['horizontal'];
	severity?: AlertProps['severity'];
	children?: string | Component;
	onClose: () => void;
	autoHideDuration?: number;
	variant?: AlertProps['variant'];
}

export const BasicAlert = ({
	className,
	onClose,
	open,
	vertical = 'bottom',
	horizontal = 'center',
	children,
	severity,
	autoHideDuration = 2000,
	variant = 'filled',
}: Props) => {
	return (
		<Wrapper className={className}>
			<Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose} anchorOrigin={{ vertical, horizontal }}>
				<Alert variant={variant} severity={severity}>
					{children}
				</Alert>
			</Snackbar>
		</Wrapper>
	);
};

// BasicAlert.defaultProps = {
// 	autoHideDuration: 2000,
// 	className: undefined,
// 	children: undefined,
// 	severity: undefined,
// 	vertical: 'vertical',
// 	horizontal: 'bottom',
// };
