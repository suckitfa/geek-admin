/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 10:40:30
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-18 10:49:45
 * @FilePath: \geek-admin\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import{
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Home from '../pages/home-page.vue'
import About from '../pages/about-page.vue'

const routes  = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/about",
        name:"About",
        component: About
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router