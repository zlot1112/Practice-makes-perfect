import {fetchJobsList} from "@/api";

export const state = ({
	jobs: []
});

// action
export const actions = {
	FETCH_JOBS(context) {
		fetchJobsList().then(res => {
			context.commit('SET_JOBS', res.data)
		}).catch(err => console.log(err))
	}
};

// mutation
export const mutations = {
	SET_JOBS(state, jobs) {
		state.jobs = jobs
	},
};

// getter
export const getters = {
	fetchJobs(state) {
		return state.jobs;
	}
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}