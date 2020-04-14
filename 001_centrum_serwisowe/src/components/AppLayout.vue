<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/logo.svg">
        <div> XYZ</div>
      </div>
    </header>

    <NavMenu/>

    <router-view/>
  </div>
</template>

<style lang="stylus">
  @import '../style/main'
</style>

<style lang="stylus" scoped>
  .header {
    img {
      width: 64px;
      height 64px;
    }
  }
</style>

<script>
  import NavMenu from './NavMenu.vue'

  export default {
    components: {
      NavMenu
    }
  }
</script>
