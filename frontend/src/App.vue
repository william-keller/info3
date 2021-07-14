<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import api from '@/PrevisaoTempo'

export default {
  name: 'App',
  data () {
    return {
      previsoes: []
    }
  },
  beforeCreate() {
    console.log("1")
  },
  created() {
    console.log("2")
  },
  beforeMount() {
    console.log("3")
  },
  mounted () {
    console.log("4")
    this.previsoes = api.getAll()
  },
  beforeUnmount() {
    console.log("5")
  },
  unmounted() {
    console.log("6")
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
