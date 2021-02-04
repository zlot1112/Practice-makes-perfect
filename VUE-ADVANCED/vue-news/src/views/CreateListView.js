import ListView from "@/views/ListView";

export default function createListView(name) {
	return {
		name: name,
		created() {

		},
		render(createElement) {
			return createElement(ListView);
		}
	}
}