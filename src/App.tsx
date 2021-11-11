import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { authRouters, mainRouters } from 'router/router';
import { TopNav } from 'components/TopNav';

import { CircularProgress } from '@mui/material';
import { Wrapper } from './Wrapper';

export interface ContainerProps {
	className?: string;
	history: any;
	location: any;
	match: any;
	staticContext?: any;
}

const App = () => {
	const theme = {
		vely: {
			bg: '#f1a3a5',
			fg: 'white',
		},
	};

	// todo lazy loading
	return (
		<ThemeProvider theme={theme}>
			<Wrapper>
				<BrowserRouter>
					<Switch>
						<Route path='/auth'>
							<Suspense fallback={<CircularProgress />}>
								{authRouters?.map(({ path, exact, component, route: AuthRoute }) => (
									<AuthRoute key={path} path={path} exact={exact} component={component} />
								))}
							</Suspense>
						</Route>
						<Route path='/'>
							<Suspense fallback={<CircularProgress />}>
								{mainRouters?.map(({ path, exact, component: Component, route: AuthRoute, topNav }) => (
									<AuthRoute
										key={path}
										path={path}
										exact={exact}
										// component={() => (
										// 	<>
										// 		<TopNav {...topNav} />
										// 		<Component />
										// 	</>
										// )}
										// component={Component}
										render={(routeProps) => (
											<>
												<TopNav {...topNav} />
												<Component {...routeProps} />
											</>
										)}
									/>
								))}
							</Suspense>
						</Route>
					</Switch>
				</BrowserRouter>
			</Wrapper>
		</ThemeProvider>
	);
};

export default App;
