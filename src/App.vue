<template>
    <div id="app">
        <v-enter></v-enter>
        <v-header></v-header>
        <v-main></v-main>
        <v-footer></v-footer>
    </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      VHeader: () => import('@/components/header/VHeader'),
      VMain: () => import('@/components/main/VMain'),
      VFooter: () => import('@/components/footer/VFooter'),
      VEnter: () => import('@/components/VEnter')
    }
  }
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
