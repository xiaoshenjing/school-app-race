<template>
    <div>
        <div class="banner">
            <img src="./images/footStep.jpg" alt="">
        </div>
        <goods-list :goodsData="personData.foot_step"></goods-list>
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
    props: {
      personData: {
        type: Object
      }
    },
    created () {
      this.$store.commit('headerTitle', 'footStep')
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