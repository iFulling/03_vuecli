<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="send">发送信息</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    send(){
      pubsub.publish('hello', 666);
    }
  },
  mounted(){
    // this.$bus.$emit("te", this.name);
  }
};
</script>