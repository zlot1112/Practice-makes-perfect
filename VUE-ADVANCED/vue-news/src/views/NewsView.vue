<template>
  <div>
    <div v-for="info in news" :key="info.id">
      <a :href="info.url">
        {{ info.title }}
      </a>
      <small>
        <router-link :to="'/user/' + info.user">{{ info.user }}</router-link>
      </small>
    </div>
  </div>
</template>
-
<script>
import {computed} from 'vue';

import {useStore} from 'vuex';

export default {
  name: "NewsView",
  setup() {
    const store = useStore();
    store.dispatch('news/FETCH_NEWS')

    const news = computed(() => {
      return store.getters['news/fetchNews'];
    });

    return {
      news
    }
  }
}
</script>

<style scoped>

</style>