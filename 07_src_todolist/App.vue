<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <add-header @headerAddTodo="addTodo" />
        <todo-list :todo="todo" />
        <select-footer
          :todo="todo"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddHeader from "./components/AddHeader";
import SelectFooter from "./components/SelectFooter";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    AddHeader,
    SelectFooter,
    TodoList,
  },
  data() {
    return {
      todo: JSON.parse(localStorage.getItem("todo")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todo) {
      this.todo.unshift(todo);
    },
    // 勾选or取消勾选
    checkTodo(id) {
      this.todo.forEach((todo) => {
        if (id === todo.id) todo.done = !todo.done;
      });
    },
    // 修改
    editTodo(id, val) {
      this.todo.forEach((todo) => {
        if (id === todo.id) todo.title = val.trim();
      });
    },
    // 删除
    deleteTodo(id) {
      this.todo = this.todo.filter((todo) => todo.id !== id);
    },
    checkAllTodo(check) {
      this.todo.forEach((todo) => (todo.done = check));
    },
    clearAllTodo() {
      const x = this.todo.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
      if (x <= 0) {
        alert("没有勾选任何TODO");
      } else {
        if (confirm("确定删除所有已完成吗？")) {
          this.todo = this.todo.filter((todo) => !todo.done);
        }
      }
    },
  },
  watch: {
    todo: {
      deep: true,
      handler(value) {
        localStorage.setItem("todo", JSON.stringify(value));
      },
    },
  },
  created() {
    this.todo.forEach((todo) => {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = false;
      }
    });
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.$bus.$on("todotitle", this.editTodo);
  },
  beforeDestroy() {
    this.$bus.$off(["checkTodo", "deleteTodo", "todotitle"]);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(106, 160, 182);
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
