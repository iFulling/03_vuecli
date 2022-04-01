import VueRouter from 'vue-router'
// 导入组件
import About from '../components/About'
import Home from '../components/Home'

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