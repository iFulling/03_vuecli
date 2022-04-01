import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import count from './count'
import person from './person'

// 创建并暴露 store
export default new Vuex.Store({
    modules: {
        count, person
    }
})