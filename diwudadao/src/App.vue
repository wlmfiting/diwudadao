<template>
  <div id="app">
    <Main-com/>
  </div>
</template>

<script>
import Main from "./components/main/main"
export default {
  name: 'App',
  components:{
    "Main-com":Main
  }
}
</script>

<style scoped>
#app{
  height: 100%;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
