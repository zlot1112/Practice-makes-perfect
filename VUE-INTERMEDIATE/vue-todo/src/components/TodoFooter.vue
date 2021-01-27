<template>
  <footer class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">
      Clear All
    </span>
  </footer>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    clearTodo() {
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  background-color: white;
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
