<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axois from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axois.get("http://localhost:8080/xx/students").then(
        Response =>{
          console.log(Response);
        },
        error =>{
          console.log(error.message);
        }        
      )
    },
    getCars() {
      axois.get("http://localhost:8080/x/cars").then(
        Response =>{
          console.log(Response);
        },
        error =>{
          console.log(error.message);
        }        
      )
    },
  },
};
</script>

