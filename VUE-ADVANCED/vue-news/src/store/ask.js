import {fetchAskList} from "@/api";

export const state = ({
	ask: [],
});

// action
export const actions = {
	FETCH_ASKS(context) {
		fetchAskList().then(res => {
			context.commit('SET_ASK', res.data)
		}).catch(err => console.log(err))
	},
};

// mutation
export const mutations = {
	SET_ASK(state, ask) {
		state.ask = ask
	},
};

// getter
export const getters = {
	fetchAsk(state) {
		return state.ask;
	}
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}