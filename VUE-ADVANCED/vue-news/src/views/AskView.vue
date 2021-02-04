<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import ListMixin from "@/mixins/ListMixin";

export default {
  name: "AskView",
  components: {
    ListItem
  },
  mixins: [ListMixin]
  //
  // setup() {
  //   const store = useStore();
  //   store.dispatch('ask/FETCH_ASKS')
  //
  //   const ask =
  //       computed(() => {
  //         return store.getters['ask/fetchAsk'];
  //       });
  //   return {
  //     ask
  //   }
  // }
}
</script>

<style scoped>
</style>