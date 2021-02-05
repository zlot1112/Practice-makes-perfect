<template>
  <h1>Chart.js</h1>
  <bar-chart></bar-chart>
  <line-chart></line-chart>
</template>

<script>
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";

export default {
  name: 'App',
  components: {
    LineChart,
    BarChart,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
