<template>
  <div>
    <em class="fas fa-user"></em>
    <router-link :to="'/user/' + item.user">{{ item.user }}</router-link>
  </div>
  <div>title : {{ item.title }}</div>
  <div>content :
    <div v-html="item.content"></div>
  </div>
</template>

<script>


import {useStore} from "vuex";
import {computed} from "vue";

export default {
  props: ["id"],
  name: "ItemView",
  setup(props) {
    const store = useStore();
    store.dispatch('item/FETCH_ITEM', props.id)

    const item =
        computed(() => {
          return store.getters['item/fetchItem'];
        });
    return {
      item
    }
  }
}
</script>

<style scoped>
</style>