<template>
    <div class="main">
        <transition name="fade" mode="out-in">
            <router-view :personData="personData"></router-view>
        </transition>
    </div>
</template>

<script>

  export default {
    name: 'VMain',
    data () {
      return {
        personData: {}
      }
    },
    methods: {
      getData () {
        this.$api.post('/mine')
          .then(res => {
            if (res.status === 200) {
              this.personData = res.data
            }
          })
      },
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
    .main {
        width: 100%;
        margin-top: 50px;
        margin-bottom: 68px;
        position: relative;

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }

        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
    }
</style>