<template>
  <div>
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__jello"
      leave-active-class="animate__backOutUp"
      appear
    >
      <h2 v-show="!show" key="1">学校名称：{{ name }}</h2>
      <h2 v-show="show" key="2">学校地址：{{ address }}</h2>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "School",
  data() {
    return {
      msg: "Hello",
      name: "尚硅谷",
      address: "北京",
      show: true,
    };
  },
  mounted() {
    this.$bus.$on("trans", (val) => {
      this.show = this.show ? val : !val;
    });
  },
};
</script>

<style lang="css" scoped>
h2 {
  background-color: pink;
}
</style>