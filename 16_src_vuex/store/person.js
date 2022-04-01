import { nanoid } from "nanoid";
import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        // 添加姓王的
        addPersonWang(context, value) {
            if (value.indexOf('王') === 0) {
                context.commit("ADD_PERSONS", value)
            } else {
                alert("不是老王")
            }
        },
        // 与服务器通信
        addsuiji(context) {
            axios.get("http://api.uixsj.cn/hitokoto/get?type=social").then(
                response => {
                    console.log(response.data);
                    context.commit("ADD_PERSONS", response.data)
                },
                error => {
                    console.log(error.message);
                }
            )
        }
    },
    mutations: {
        ADD_PERSONS(state, value) {
            const perObj = {
                id: nanoid(),
                name: value,
            };
            state.persons.unshift(perObj)
        }
    },
    state: {
        persons: [{ id: '001', name: "张三" }]
    },
    getters: {
        firstName(state) {
            return state.persons[0].name
        }
    }
}
