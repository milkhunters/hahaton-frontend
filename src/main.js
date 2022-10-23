import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'

require("jquery")

createApp(App).use(router).mount('#app')

//App.use(router).mount('#app')
