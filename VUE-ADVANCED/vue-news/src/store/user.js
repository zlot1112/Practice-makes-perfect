import {fetchUserInfo} from "@/api";

export const state = ({
	user: {},
});

// action
export const actions = {
	FETCH_USER(context, name) {
		fetchUserInfo(name).then(res => {
			context.commit('SET_USER', res.data)
		}).catch(err => console.log(err))
	},
};

// mutation
export const mutations = {
	SET_USER(state, user) {
		state.user = user
	},
};

// getter
export const getters = {
	fetchUser(state) {
		return state.user;
	}
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}