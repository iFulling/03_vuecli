<template>
  <div class="todo-footer" v-if="todo.length">
    <label>
      <input type="checkbox" v-model="checkAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ todo.length }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "SelectFooter",
  props: ["todo"],
  computed: {
    doneTotal() {
      return this.todo.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    checkAll: {
      get() {
        return this.todo.length === this.doneTotal;
      },
      set(value) {
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    clearAll() {
      this.$emit("clearAllTodo")
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>