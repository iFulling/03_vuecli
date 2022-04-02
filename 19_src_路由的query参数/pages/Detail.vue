<template>
  <div>
    <div>编号：{{ $route.query.id }}</div>
    <div>信息：{{ $route.query.msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
</style>