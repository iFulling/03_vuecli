<template>
  <div>
    <h2>人员信息</h2>
    <h3>列表中第一个人的名字是 {{ firstName }}</h3>
    <h3>上方求和是：{{ num }}</h3>
    <input type="text" placeholder="输入" v-model="name" />
    <button @click="addPerson" @keyup.enter="addPerson">添加</button>
    <button @click="addWang">添加老王</button>
    <button @click="addSuiji">通过服务器添加名字</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script> 
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.person.persons;
    },
    num() {
      return this.$store.state.count.num;
    },
    firstName() {
      return this.$store.getters["person/firstName"];
    },
  },
  methods: {
    addPerson() {
      this.$store.commit("person/ADD_PERSONS", this.name);
      this.name = "";
    },
    addWang() {
      this.$store.dispatch("person/addPersonWang", this.name);
      this.name = "";
    },
    addSuiji() {
      this.$store.dispatch("person/addsuiji", this.name);
      this.name = "";
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>