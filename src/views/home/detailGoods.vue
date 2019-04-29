<template>
    <div class="detailGoods">
        <div class="banner" :style="select==='3'?'margin-bottom:20px':''">
            <img class="img" v-show="select==='1'" src="./asset/1.png" width="100%">
            <img class="img" v-show="select==='2'" src="./asset/2.png" width="100%">
            <img class="img" v-show="select==='3'" src="./asset/3.png" width="100%">
        </div>
        <div class="search">
            <input type="search" class="input" @keypress.prevent="search($event)">
            <i class="material-icons">search</i>
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
        select: this.$route.params.select
      }
    },
    methods: {
      getSelectData () {
        this.$store.commit('headerTitle', this.select)

        switch (this.select) {
          case '1':
            this.$http.get('/goods/self-running')
              .then(res => {
                if (res.data) {
                  this.goods = res.data.one
                }
              })
            break
          case '2':
            this.$http.get('/goods/official-running')
              .then(res => {
                if (res.data) {
                  this.goods = res.data.two
                }
              })
            break
          case '3':
            this.$http.get('/goods/entrusted-running')
              .then(res => {
                if (res.data) {
                  this.goods = res.data.three
                }
              })
            break
        }
      },
      search (e) {
        let keyCode = e.which
        if (keyCode === 13) {
          let content = e.target.value
          console.log(content)
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
            height: 30px;
            margin: 0 auto 20px;
            position: relative;

            .input {
                width: 100%;
                height: 100%;
                border-radius: 20px;
                outline: none;
                border: 1px solid $grey;
                padding: 5px;

                &::-webkit-search-cancel-button {
                    display: none;
                }
            }

            .material-icons {
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
</style>