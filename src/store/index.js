import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		cards: [],
	},
	mutations: {
		ADD_ITEM: function (state, payload) {
			state.cards.push(payload);
		},
		DELETE_ITEM: function (state, payload) {
			const index = state.cards.indexOf(payload);
			state.cards.splice(index, 1);
		},
		EDIT_ITEM: function (state, payload) {
			const card = state.cards.find((task) => task.id === payload.id);
			card.title = payload.title;
			card.description = payload.description;
		},
	},
	actions: {
		addTask: function ({ commit }, payload) {
			commit('ADD_ITEM', payload);
		},
		deleteTask: function ({ commit }, payload) {
			commit('DELETE_ITEM', payload);
		},
		editTask: function ({ commit }, payload) {
			commit('EDIT_ITEM', payload);
		},
	},
	getters: {
		getIDs: (state) => state.cards.map(({ id }) => id),
		getTasks: (state) => state.cards,
	},
	plugins: [createPersistedState()],
});
export default store;
