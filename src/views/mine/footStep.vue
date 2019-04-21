<template>
    <div>
        <goods-list :goodsData="personData.foot_step"></goods-list>
    </div>
</template>

<script>
  export default {
    name: 'footStep',
    components: {
      GoodsList: () => import('@/components/main/GoodsList')
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