<template>
  <ToolBar></ToolBar>
  <router-view :key="$route.params.slug || 'default'" v-slot="{ Component }">
    <transition name="page">
      <component :is="Component"/>
    </transition>
  </router-view>
  <spinner :loading="loadingStatus"></spinner>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import {eventBus} from './store/bus'

export default {
  name: 'App',
  data() {
    return {
      loadingStatus: true
    }
  },
  components: {
    ToolBar,
    Spinner
  },
  mounted() {
    eventBus.on('chgLoading', v => {
      this.loadingStatus = v
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
