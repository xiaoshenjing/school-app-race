<template>
    <div>
        <div class="banner">
            <img src="./images/order.jpg" alt="">
        </div>
        <goods-list :goodsData="orderData" :order="true"></goods-list>
        <loading :loading="false"></loading>
    </div>
</template>

<script>
  export default {
    name: 'order',
    components: {
      GoodsList: () => import('@/components/main/GoodsList'),
      Loading: () => import('@/components/main/Loading'),
    },
    props: {
      personData: {
        type: Object
      }
    },
    data () {
      return {
        orderData: []
      }
    },
    mounted () {
      this.orderData = this.personData.order
    },
    created () {
      this.$store.commit('headerTitle', 'order')
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