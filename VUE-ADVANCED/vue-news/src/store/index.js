import {createStore} from "vuex";
import news from "./news";
import ask from "./ask";
import jobs from "./jobs";
import user from "./user";

const store = createStore({
	modules: {
		news,
		ask,
		jobs,
		user
	}
})

export {store}