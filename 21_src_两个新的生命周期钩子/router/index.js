import VueRouter from 'vue-router'
// 导入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建并暴露路由
export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news", // 此处path一定不要写 “/”
                    component: News
                },
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "Detail",
                            path: "detail",
                            component: Detail,
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