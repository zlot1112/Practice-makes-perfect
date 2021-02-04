import {createStore} from "vuex";
import news from "./news";
import ask from "./ask";
import jobs from "./jobs";
import user from "./user";
import item from "./item";
import {fetchList} from "@/api";

const store = createStore({
	modules: {
		news,
		ask,
		jobs,
		user,
		item
	},
	state: {
		list: []
	},
	actions: {
		FETCH_LIST(context, name) {
			return fetchList(name).then(res => {
				context.commit('SET_LIST', res.data)
			}).catch(err => console.log(err))
		},
	},
	mutations: {
		SET_LIST(state, list) {
			state.list = list
		},
	},
	getters: {
		fetchList(state) {
			return state.list;
		}
	}
})

export {store}