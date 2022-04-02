import VueRouter from 'vue-router'
// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建并暴露路由
const router = new VueRouter({
    routes: [
        {
            name: "About",
            path: "/about",
            component: About,
            meta: { title: "关于" }
        },
        {
            name: "Home",
            path: "/home",
            component: Home,
            meta: { title: "首页" },
            children: [
                {
                    name: "News",
                    path: "news", // 此处path一定不要写 “/”
                    component: News,
                    meta: { isAuth: true, title: "新闻" }
                },
                {
                    name: "Message",
                    path: "message",
                    component: Message,
                    meta: { isAuth: true, title: "消息" },
                    children: [
                        {
                            name: "Detail",
                            path: "detail",
                            component: Detail,
                            meta: { title: "详细" },
                            props({ query }) {
                                return {
                                    id: query.id,
                                    msg: query.msg
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})


// 全局前置守卫，初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) { // 判断当前路由是否需要进行权限控制
        if (localStorage.getItem("school") === "atguigu") { // 权限控制的具体规则
            next() // 放行
        } else {
            alert("你没有权限")
        }
    } else {
        next()
    }
})

// 全局后置守卫，初始化时执行、每次路由切换后执行
router.afterEach((to, from) => {
    document.title = to.meta.title || "03_vuecli"
})

export default router