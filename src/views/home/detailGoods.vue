<template>
    <div>
        <goods-list :goodsData="goods"></goods-list>
        <loading :loading="loading"></loading>
    </div>
</template>

<script>
  export default {
    name: 'detailGoods',
    components: {
      GoodsList: () => import('@/components/main/GoodsList'),
      Loading: () => import('@/components/main/Loading')
    },
    data () {
      return {
        loading: true,
        goods: [],
      }
    },
    methods: {
      getSelectData () {
        let select = this.$route.params.select

        this.$store.commit('headerTitle', select)

        switch (select) {
          case '1':
            this.$api.post('/home/1')
              .then(res => {
                if (res.status === 200) {
                  this.goods = res.data.goods
                }
              })
            break
          case '2':
            this.$api.post('/home/1')
              .then(res => {
                if (res.status === 200) {
                  this.goods = res.data.goods
                }
              })
            break
          case '3':
            this.$api.post('/home/1')
              .then(res => {
                if (res.status === 200) {
                  this.goods = res.data.goods
                }
              })
            break
        }
      }
    },
    created () {
      this.getSelectData()
    }
  }
</script>

<style scoped lang="scss">

</style>