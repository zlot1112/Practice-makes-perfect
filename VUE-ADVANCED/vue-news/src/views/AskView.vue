<template>
  <div v-for="info in asks" :key="info.id">
    {{ info.title }}
  </div>
</template>

<script>
import {fetchAskList} from "@/api";

export default {
  name: "AskView",
  data() {
    return {
      asks: []
    }
  },
  created() {
    fetchAskList().then(res => this.asks = res.data).catch();
  }
}
</script>

<style scoped>

</style>