<template>
  <div>
    <ul class="news-list">
      <li v-for="info in data" :key="info.id" class="post">
        <div class="points">
          {{ info.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-if="info.url" :href="info.url">{{ info.title }} </a>
            <router-link v-else :to="'/item/' + info.id">{{ info.title }}</router-link>
          </p>
          <small class="line-text">by
            <router-link :to="'/user/' + info.user">{{ info.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ['data']
}

</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #8763FB;
  text-decoration: none;
}

.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b983;
}

.news-title {
  margin: 0;
}

.line-text {
  color: #828282;
}
</style>