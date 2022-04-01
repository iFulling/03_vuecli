<template>
  <div class="item">
    <h3>{{ title }}分类</h3>
    <slot :games="games">123</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      text: "我修改了123456",
    };
  },
  props: ["title"],
};
</script>

<style scoped>
.item {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: yellow;
}
</style>