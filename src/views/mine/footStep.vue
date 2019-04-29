<template>
    <div>
        <div class="banner">
            <img src="./images/footStep.jpg" alt="">
        </div>
        <goods-list :goodsData="footStep"></goods-list>
        <loading :loading="false"></loading>
    </div>
</template>

<script>
  export default {
    name: 'footStep',
    components: {
      GoodsList: () => import('@/components/main/GoodsList'),
      Loading: () => import('@/components/main/Loading'),
    },
    data () {
      return {
        personData: {},
        footStep: []
      }
    },
    methods: {
      init () {
        this.$store.commit('headerTitle', 'footStep')
        this.personData = this.$store.state.personMessage

        // get footStep
        this.$http.get('/goods/user-foot-step', {
          params: {
            ids: this.personData.footStep
          }
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.footStep = res.data.footStep
            }
          })
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style scoped lang="scss">
    .banner {
        width: 100%;
        margin-bottom: 20px;

        img {
            width: 100%;
        }
    }
</style>