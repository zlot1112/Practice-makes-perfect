import {fetchNewsList} from "@/api";

export const state = ({
	jobs: []
});

// action
export const actions = {
	FETCH_NEWS(context) {
		fetchNewsList().then(res => {
			context.commit('SET_NEWS', res.data)
		}).catch(err => console.log(err))
	},
};

// mutation
export const mutations = {
	SET_NEWS(state, news) {
		state.news = news
	},
};

// getter
export const getters = {
	fetchNews(state) {
		return state.news;
	}
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}