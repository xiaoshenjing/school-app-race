<template>
    <div id="app">
        <v-tip></v-tip>
        <v-login v-show="show"></v-login>
        <v-header v-show="!show"></v-header>
        <v-main v-show="!show"></v-main>
        <v-footer v-show="!show"></v-footer>
    </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      VHeader: () => import('@/components/header/VHeader'),
      VMain: () => import('@/components/main/VMain'),
      VFooter: () => import('@/components/footer/VFooter'),
      VLogin: () => import('@/components/VLogin'),
      VTip: () => import('@/components/VTip')
    },
    computed: {
      show () {
        return !this.$store.state.login
      }
    },
    methods: {
      init () {
        let html = document.documentElement.clientWidth
        let fsz = (html * (10 / 375)).toFixed(2)
        document.querySelector('html').style.fontSize = fsz + 'px'

        this.$http.defaults.headers.common['Token'] = this.$store.state.token
      }
    },
    watch: {
      '$store.state.token': function (newVal, ) {
        this.$http.defaults.headers.common['Token'] = newVal
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
