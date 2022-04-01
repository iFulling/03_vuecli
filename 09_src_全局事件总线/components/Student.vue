<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="send">发送信息</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    send() {
      this.$bus.$emit("getName", this.name);
    },
  },
  mounted(){
    this.$bus.$emit("te", this.name);
  }
};
</script>