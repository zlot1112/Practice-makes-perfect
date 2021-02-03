import {createStore} from "vuex";
import news from "./news";
import ask from "./ask";
import jobs from "./jobs";
import user from "./user";
import item from "./item";

const store = createStore({
    modules: {
        news,
        ask,
        jobs,
        user,
        item
    }
})

export {store}