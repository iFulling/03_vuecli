<template>
  <div id="app">
    <count/>
    <hr>
    <persons/>
  </div>
</template>

<script>
import Count from './components/Count.vue';
import Persons from './components/Persons.vue';

export default {
  name: 'App',
  components: {
    Count,
    Persons
  },
  mounted(){
    console.log(this.$store);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin-left: 5px;
}
</style>
