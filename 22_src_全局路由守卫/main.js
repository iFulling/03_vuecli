import Vue from 'vue';
import App from './App.vue';
// 导入插件
import VueRouter from 'vue-router';
// 导入路由
import router from './router'

Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})