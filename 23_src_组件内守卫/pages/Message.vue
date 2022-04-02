<template>
  <div>
    <ul>
      <li v-for="m in msgs" :key="m.id">
        <!-- 把to写成对象形式 -->
        <router-link
          :to="{
            name: 'Detail',
            query: {
              id: m.id,
              msg: m.msg,
            },
          }"
        >
          {{ m.msg }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
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
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "Detail",
        query: {
          id: m.id,
          msg: m.msg,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "Detail",
        query: {
          id: m.id,
          msg: m.msg,
        },
      });
    },
  },
};
</script>

<style>
</style>