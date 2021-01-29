<template>
  <div>
    <div v-for="info in news" :key="info.id">
      {{ info.user }}
    </div>
  </div>
</template>

<script>
import {fetchNewsList} from '../api/index'

export default {
  name: "NewsView",
  data() {
    return {
      news: []
    }
  },
  created() {
    fetchNewsList().then(res => this.news = res.data).catch();
  }
}
</script>

<style scoped>

</style>