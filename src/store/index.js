/* emilien <emilien@emilien-pc>, 2021 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './modules/app';

export const store = new Vuex.Store({
	modules: { app },
});
