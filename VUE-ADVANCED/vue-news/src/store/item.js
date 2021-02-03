import {fetchItemInfo} from "@/api";

export const state = ({
    item: {},
});

// action
export const actions = {
    FETCH_ITEM(context, name) {
        fetchItemInfo(name).then(res => {
            context.commit('SET_ITEM', res.data)
        }).catch(err => console.log(err))
    },
};

// mutation
export const mutations = {
    SET_ITEM(state, item) {
        state.item = item
    },
};

// getter
export const getters = {
    fetchItem(state) {
        return state.item;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}