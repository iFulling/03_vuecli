<template>
  <div>
    <ul>
      <li v-for="m in msgs" :key="m.id">
        <!-- 把to写成对象形式 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              msg: m.msg,
            },
          }"
        >
          {{ m.msg }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgs: [
        {
          id: "001",
          msg: "message001",
        },
        {
          id: "002",
          msg: "message002",
        },
        {
          id: "003",
          msg: "message003",
        },
      ],
    };
  },
};
</script>

<style>
</style>