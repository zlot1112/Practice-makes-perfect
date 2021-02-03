<template>
  <div>
    <list-item :data="news"></list-item>
  </div>
</template>
-
<script>
import ListItem from "@/components/ListItem";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {
    ListItem
  },
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