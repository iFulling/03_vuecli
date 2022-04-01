<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handle(todo.id)" />
      <span v-show="!todo.isEdit"> {{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="ListDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="editItem(todo)">
      编辑
    </button>
    <input
      v-show="todo.isEdit"
      type="text"
      :value="todo.title"
      ref="itemInput"
      @keyup.enter="inputBlur(todo, $event)"
      @blur="inputBlur(todo, $event)"
    />
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    handle(id) {
      this.$bus.$emit("checkTodo", id);
    },
    ListDelete(id) {
      if (confirm("确定删除吗？")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
    editItem(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.itemInput.focus();
      });
    },
    inputBlur(todo, e) {
      todo.isEdit = false;
      // console.log(todo.id, e.target.value);
      if (e.target.value.trim() === "") return alert("你没有输入值");
      this.$bus.$emit("todotitle", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>