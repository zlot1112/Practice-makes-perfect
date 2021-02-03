<template>
  <div>
    <list-item :data="ask"></list-item>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import ListItem from "@/components/ListItem";

export default {
  name: "AskView",
  components: {
    ListItem
  },
  setup() {
    const store = useStore();
    store.dispatch('ask/FETCH_ASKS')

    const ask =
        computed(() => {
          return store.getters['ask/fetchAsk'];
        });
    return {
      ask
    }
  }
}
</script>

<style scoped>
</style>