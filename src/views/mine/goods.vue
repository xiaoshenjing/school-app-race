<template>
    <div>
        <goods-list :goodsData="personData.goods"></goods-list>

    </div>
</template>

<script>
  export default {
    name: 'goods',
    components: {
      GoodsList: () => import('@/components/main/GoodsList'),
    },
    props: {
      personData: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">

</style>