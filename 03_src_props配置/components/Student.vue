<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>学生姓名：{{ myName }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Hello",
      myName: this.name,
    };
  },
  props: {
    name: String,
    sex: String,
    age: Number,
  },
};
</script>