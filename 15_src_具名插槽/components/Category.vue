<template>
  <div class="item">
      <h3>{{title}}分类</h3>
      <slot name="center"></slot>
      <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:["title"]

}
</script>

<style scoped>
    .item{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: yellow;
    }
</style>