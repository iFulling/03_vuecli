<template>
  <div>
    <student ref="student"/>
    <hr />
    <school @at="showInfo" />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { Student, School },
  methods: {
    showInfo(name) {
      console.log(name);
    },
  },
  mounted(){
    this.$refs.student.$on('at', this.showInfo)
  }
};
</script>

