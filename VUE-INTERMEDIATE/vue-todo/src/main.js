import Vue from 'vue'
import App from './App.vue'
import { store } from "./components/store/sotre";

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
