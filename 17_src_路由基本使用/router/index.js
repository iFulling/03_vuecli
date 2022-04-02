import VueRouter from 'vue-router'
// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'

// 创建并暴露路由
export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home
        }
    ]
})