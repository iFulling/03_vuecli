<template>
  <div class="demo">
    <h2 class="name">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="show">获取信息</button>
    <button @click="unbind">解绑时间</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "Hello",
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods:{
    show(){
      this.$emit('at', this.name)
    },
    unbind(){
      this.$off('at')
    }
  }
};
</script>

<style lang="css" scoped>
.demo {
  background-color: pink;
}
</style>