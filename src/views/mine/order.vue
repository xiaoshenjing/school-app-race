<template>
    <div>
        <goods-list :goodsData="orderData" :order="true"></goods-list>
    </div>
</template>

<script>
  export default {
    name: 'order',
    components: {
      GoodsList: () => import('@/components/main/GoodsList')
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
    }
  }
</script>

<style scoped lang="scss">

</style>