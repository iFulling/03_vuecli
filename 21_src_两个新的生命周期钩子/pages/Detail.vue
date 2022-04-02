<template>
  <div>
    <div>编号：{{ id }}</div>
    <div>信息：{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "msg"],
};
</script>

<style>
</style>