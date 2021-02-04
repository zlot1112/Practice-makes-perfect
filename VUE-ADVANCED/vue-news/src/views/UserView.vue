<template>
  <div>
    <user-profile :user="user">
      <slot name="username"></slot>
      <slot name="time"></slot>
    </user-profile>
  </div>
</template>

<script>


import {useStore} from "vuex";
import {computed} from "vue";
import UserProfile from "@/components/UserProfile";

export default {
  props: ["name"],
  name: "UserView",
  components: {UserProfile},
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