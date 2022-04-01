<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        v-model="UsersText"
        type="text"
        placeholder="enter the name you search"
      />&nbsp;<button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "Search",
  data() {
    return {
      UsersText: "",
    };
  },
  methods: {
    searchUser() {
      console.log(this.UsersText);
      axios.get(`https://api.github.com/search/users?q=${this.UsersText}`).then(
          response =>{
              console.log(response.data.items);
              this.$bus.$emit("UsersItems", response.data.items)
          },
          error =>{
              console.log(error.message);
          }
      )
    },
  },
};
</script>

<style>
</style>