<template>
    <div>
        <div class="banner">
            <img src="./images/goods.jpg" alt="">
        </div>
        <goods-list :goodsData="goods"></goods-list>
        <loading :loading="false"></loading>
    </div>
</template>

<script>
  export default {
    name: 'goods',
    components: {
      GoodsList: () => import('@/components/main/GoodsList'),
      Loading: () => import('@/components/main/Loading'),
    },
    data () {
      return {
        personData: {},
        goods: []
      }
    },
    methods: {
      init () {
        this.$store.commit('headerTitle', 'goods')
        this.personData = this.$store.state.personMessage

        // get goods
        this.$http.get('/goods/user-goods', {
          params: {
            ids: this.personData.goods
          }
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.goods = res.data.goods
            }
          })
      },
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