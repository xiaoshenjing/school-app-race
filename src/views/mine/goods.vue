<template>
    <div>
        <div class="banner">
            <img src="./images/goods.jpg" alt="">
        </div>
        <goods-list :goodsData="personData.goods"></goods-list>
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
    props: {
      personData: {
        type: Object
      }
    },
    created () {
      this.$store.commit('headerTitle', 'goods')
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