import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		cards: [],
	},
	mutations: {
		createNewTask: function (state, card) {
			state.cards.push(card);
		},
		deleteTask: function (state, index) {
			state.cards.splice(index, 1);
		},
	},
	actions: {},
	getters: {},
	plugins: [createPersistedState()],
});
export default store;
