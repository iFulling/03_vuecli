<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="backT">后退3步</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back(); // 后退1步
    },
    forward() {
      this.$router.forward(); // 前进1步
    },
    backT() {
      this.$router.go(-3); // 负数为后退，正数为前进
    },
  },
};
</script>

<style>
</style>