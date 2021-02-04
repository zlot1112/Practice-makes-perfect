import {useStore} from "vuex";

export default {
	created() {
		const store = useStore();
		store.dispatch('FETCH_LIST', this.$route.name).then()
	}
}
