<template>
  <div id="app">
<kalendar></kalendar>
  </div>
</template>

<script>
import kalendar from './components/kalendar.vue'
export default {
  components: {kalendar},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
