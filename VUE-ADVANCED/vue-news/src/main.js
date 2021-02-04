import {createApp} from 'vue'
import App from './App.vue'
import router from './routers/index' // <--- Router 설정
import {store} from './store/index'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')