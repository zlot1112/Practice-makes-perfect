<template>
  <div v-for="info in jobs" :key="info.id">
    {{ info }}
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "JobsView",
  setup() {
    const store = useStore();
    store.dispatch('jobs/FETCH_JOBS')

    const jobs = computed(() => {
      return store.getters['jobs/fetchAsk'];
    });

    return {
      jobs
    }
  }
}
</script>

<style scoped>

</style>