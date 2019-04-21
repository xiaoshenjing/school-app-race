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
    },
    methods: {
      init () {
        let html = document.documentElement.clientWidth
        let fsz = (html * (10 / 375)).toFixed(2)
        document.querySelector('html').style.fontSize = fsz + 'px'
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style>
    html, body, ul, li {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 10px;
    }

    a {
        text-decoration: none;
        color: #2c3e50;
    }

    ul, li {
        list-style: none;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 1.8rem;
        overflow: hidden;
    }
</style>
