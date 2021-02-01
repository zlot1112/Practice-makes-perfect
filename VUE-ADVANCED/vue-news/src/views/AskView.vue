<template>
  <div v-for="info in ask" :key="info.id">
    <a :href="info.url">
      {{ info.title }}
    </a>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "AskView",
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