<template>
  <div>
    <h2>当前求和：{{num}}</h2>
    <h2>当前求和的十倍：{{bigSum}}</h2>
    <h3>下方总人数是：{{persons.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">奇数时加</button>
    <button @click="jiaWait(n)">等一会加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    ...mapActions('count',["jiaOdd", "jiaWait"]),
    ...mapMutations('count',["JIA", "JIAN"]),
  },
  computed:{
      ...mapState("count",["num"]),
      ...mapState("person",["persons"]),
      ...mapGetters('count',["bigSum"])
  }
};
</script>
