<template>
  <div>
    <h1>Wartosć licznika to: {{licznik}}</h1>
    <button @click="dodaj">Dodaj 1</button>
    <button @click="odejmij">Odejmij 1</button>
  </div>
</template>

<script>
  import store from '../store'

  export default {
    computed: {
      licznik: () => store.getters.pobierzLicznik
    },
    methods: {
      dodaj: () => store.commit('dodaj'),
      odejmij: () => store.dispatch('zmniejszLicznik')
    }
  }
</script>
