<template>
  <div v-for="info in jobs" :key="info.id">
    {{ info }}
  </div>
</template>

<script>
import {fetchJobsList} from "@/api";

export default {
  name: "JobsView",
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetchJobsList().then(res => this.jobs = res.data).catch();
  }
}
</script>

<style scoped>

</style>