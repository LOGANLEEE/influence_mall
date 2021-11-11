import React from 'react';
import { Route } from 'react-router-dom';

const LazyLogin = React.lazy(() => import('containers/Login').then(({ Login }) => ({ default: Login })));
const LazyMain = React.lazy(() => import('containers/Main').then(({ Main }) => ({ default: Main })));
const LazyMarket = React.lazy(() => import('containers/Market').then(({ Market }) => ({ default: Market })));
const LazyMarketDetail = React.lazy(() => import('containers/Market/MarketDetail').then(({ MarketDetail }) => ({ default: MarketDetail })));
const LazyRevenue = React.lazy(() => import('containers/Revenue').then(({ Revenue }) => ({ default: Revenue })));
const LazyRevenueDetail = React.lazy(() => import('containers/Revenue/RevenueDetail').then(({ RevenueDetail }) => ({ default: RevenueDetail })));

const loginRoute = {
	path: '/auth/login',
	name: 'login',
	exact: true,
	component: LazyLogin,
	route: Route,
};

export const authRouters = [loginRoute];

const landingPage = {
	path: '/',
	exact: true,
	component: LazyMain,
	route: Route,
	topNav: {
		title: '마켓 관리자',
		useBack: false,
	},
};
const RevenuePage = {
	path: '/revenue',
	exact: true,
	component: LazyRevenue,
	route: Route,
	topNav: {
		title: '수익',
		useBack: true,
	},
};

const RevenueDetailPage = {
	path: '/revenue/detail',
	exact: true,
	component: LazyRevenueDetail,
	route: Route,
	topNav: {
		title: '수익 지급 내역',
		useBack: true,
	},
};

const MarketPage = {
	path: '/market',
	exact: true,
	component: LazyMarket,
	route: Route,
	topNav: {
		title: '마켓',
		useBack: true,
	},
};
const MarketDetailPage = {
	path: '/market/detail/:id',
	exact: true,
	component: LazyMarketDetail,
	route: Route,
	topNav: {
		title: '마켓 상품 상세',
		useBack: true,
	},
};

export const mainRouters = [landingPage, RevenuePage, RevenueDetailPage, MarketPage, MarketDetailPage];
