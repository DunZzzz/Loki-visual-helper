/*
 * app.js
 * emilien <emilien@emilien-pc>, 2020
 */

import { store } from '@/store/electron-store';

const state = {
	projects: store.get('app/projects') || [],

	selected: null
};

const getters = {
	isModified: ({ selected }) => selected && selected.difference,
};

const mutations = {
	ADD_PROJECT: (state, { data }) => {
		var title = data.match(/([^\/]*)\/*$/)[1];
		state.projects = [ ...state.projects, { path: data, title } ];
		store.set('app/projects', state.projects);
	},
	DEL_PROJECT: (state, { data, showErr=true }) => {
		let r = state.projects.map(x => x.path).indexOf(data);

		if (r === -1) {
			if (showErr) {
				console.error('Couldn\'t delete unexistant project')
			}
			return;
		}

		state.projects.splice(r, 1);
		store.set('app/projects', state.projects);
	},
	SELECT_PROJECT: (state, { data }) => {
		state.selected = data;
	}
};

const actions = {
	addProject({ commit }, data) {
		commit('DEL_PROJECT', { data, showErr: false });
		commit('ADD_PROJECT', { data });
	},
	delProject({ commit }, data) {
		commit('DEL_PROJECT', { data });
	},
	selectProject({ commit }, data) {
		commit('SELECT_PROJECT', { data });
	},
};

export default {
	namespaced: true,
	getters,
	state,
	mutations,
	actions
};

