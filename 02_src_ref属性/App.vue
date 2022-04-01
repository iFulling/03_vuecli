<template>
  <div>
    <h2 ref="hello">{{ msg }}</h2>
    <school ref="school" />
    <button @click="showInfo">点我获取信息</button>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {
    showInfo() {
      console.log(this.$refs.hello);
      console.log(this.$refs.school);
    },
  },
};
</script>

