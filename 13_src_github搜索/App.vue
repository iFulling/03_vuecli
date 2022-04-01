<template>
  <div class="container">
    <search />
    <list />
  </div>
</template>

<script>
import List from "./components/List";
import Search from "./components/Search";
export default {
  components: { Search, List },
  name: "App",
};
</script>

