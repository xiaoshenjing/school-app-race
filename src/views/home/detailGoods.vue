<template>
    <div class="detailGoods">
        <div class="banner" :style="$route.params.select==='3'?'margin-bottom:20px':''">
            <img class="img" v-show="$route.params.select==='1'" src="./asset/1.png" width="100%">
            <img class="img" v-show="$route.params.select==='2'" src="./asset/2.png" width="100%">
            <img class="img" v-show="$route.params.select==='3'" src="./asset/3.png" width="100%">
        </div>
        <div class="search">
            <input type="search">
        </div>
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
        search: ''
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
    .detailGoods {
        overflow: hidden;

        .banner {
            width: 338px;
            height: 132px;
            margin: 20px auto 70px;
            position: relative;

            .img {
                position: absolute;
                top: 0;
                left: 0;
            }
        }

        .search {
            width: 80%;
            margin: 0 auto 20px;
        }
    }
</style>