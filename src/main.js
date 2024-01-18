/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 10:37:49
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-18 10:47:40
 */

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

createApp(App)
    .use(router)
    .mount('#app')
