<template>
  <div id="app">
    <h1>Witaj w Vue.js</h1>
    <button @click="hardBack">Hard back</button>
    <button @click="hardForward">Hard forward</button>
    <ul>
      <li>
        <router-link to="/" tag="button" @click.native="alertMe">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'onas'}">O nas</router-link>
      </li>
      <li>
        <router-link to="/sadsadsadsa" @click.native="push">O nas push</router-link>
      </li>
      <li>
        <router-link to="/kontakt">Kontakt</router-link>
      </li>
      <li>
        <router-link to="/kontakt-foo-bar"  @click.native="replace">Kontakt replace</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    methods:{
      alertMe(){
        alert('Uwaga!')
      },
      push(){
        this.$router.push('./onas') // przekierowywuje do linka ale mozna sie dostac do oryginalnego poprzez wstecz
      },
      replace(){
        this.$router.replace('/kontakt')
      },
      hardBack(){
        this.$router.go(-2) // idzie o dwa do tylu
      },
      hardForward(){
        this.$router.go(2) // idzie o dwa do przodu
      }
    }
  }
</script>

<style>

</style>
