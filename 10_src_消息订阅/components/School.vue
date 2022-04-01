<template>
  <div class="demo">
    <h2 class="name">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="tes">获取学生信息</button>
    <button>解绑时间</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      msg: "Hello",
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    tes(val) {
      console.log(val);
    },
  },
  mounted() {
    // this.$bus.$on("getName", (StudentName) => {
    //   console.log(StudentName);
    // });
    // this.$bus.$on("te", this.tes)
    this.pid = pubsub.subscribe("hello", (msgName, data) => {
      console.log(msgName, data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off("getName");
    pubsub.unsubscribe(this.pid);
  },
};
</script>

<style lang="css" scoped>
.demo {
  background-color: pink;
}
</style>