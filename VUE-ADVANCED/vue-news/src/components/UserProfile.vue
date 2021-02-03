<template>
  <div class="user-container">
    <div>
      <em class="fas fa-user"></em>
    </div>
    <div class="user-description">
      <slot name="username"></slot>
      <div class="time">
        <slot name="time"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: ["user"]
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 0.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>