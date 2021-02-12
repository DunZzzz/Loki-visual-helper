/* emilien <emilien@emilien-pc>, 2021 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import { setPageTitle } from '../utils';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home/')
	},
	{ path: '*', redirect: '/' }
];

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(async(to, from, next) => {
	NProgress.start();
	setPageTitle(to.meta.title);
	next();
});

router.afterEach(() => {
	NProgress.done();
});
