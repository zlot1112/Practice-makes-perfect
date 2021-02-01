<template>
  <div>{{ user }}</div>
</template>

<script>


import {useStore} from "vuex";
import {computed} from "vue";

export default {
  props: ["name"],
  name: "UserView",
  setup(props) {
    const store = useStore();
    store.dispatch('user/FETCH_USER', props.name)

    const user =
        computed(() => {
          return store.getters['user/fetchUser'];
        });
    return {
      user
    }
  }
}
</script>

<style scoped>

</style>