<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Licznik/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Licznik from "./components/Licznik";

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Licznik
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
