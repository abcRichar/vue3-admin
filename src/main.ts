import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router/index'

import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
const pinia = createPinia()
app.use(Antd).use(router).use(pinia).mount('#app')
