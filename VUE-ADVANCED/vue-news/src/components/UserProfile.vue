<template>
  <div class="user-container">
    <div>
      <em class="fas fa-user"></em>
    </div>
    <div class="user-description">
      <div slots="username">{{ user.id }}</div>
      <div class="time">
        <div slots="time">{{ user.created }}</div>
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