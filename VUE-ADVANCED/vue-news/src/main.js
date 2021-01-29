import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // <--- Router 설정

createApp(App).use(router).mount('#app')
