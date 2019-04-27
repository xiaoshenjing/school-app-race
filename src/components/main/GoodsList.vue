<template>
    <div class="goods-list">
        <div class="list-wrapper">
            <div class="list">
                <div class="item" v-for="(item,index) in goods.even" :key="index" @click="showDetail(item)">
                    <div class="img">
                        <img @click.prevent="" :src="item.src[0]" alt="" width="100%" height="100%">
                    </div>
                    <div class="desc">
                        <div class="title">{{item.title}}</div>
                        <div class="price">￥{{item.price.toFixed(2)}}</div>
                        <div class="watch"><i class="material-icons">visibility</i>&nbsp;&nbsp;{{item.watch}}</div>
                    </div>
                </div>
            </div>

            <div class="list">
                <div class="item" v-for="(item,index) in goods.odd" :key="index" @click="showDetail(item)">
                    <div class="img">
                        <img @click.prevent="" :src="item.src[0]" alt="" width="100%" height="100%">
                    </div>
                    <div class="desc">
                        <div class="title">{{item.title}}</div>
                        <div class="price">￥{{item.price.toFixed(2)}}</div>
                        <div class="watch"><i class="material-icons">visibility</i>&nbsp;&nbsp;{{item.watch}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'GoodsList',
    data () {
      return {}
    },
    props: {
      goodsData: {
        type: Array
      },
      order: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      showDetail (data) {
        // show footStep
        let once = true
        this.$store.state.footStep.forEach(good => {
          if (good.id === data.id) {
            once = false
          }
        })
        if (once) {
          this.once = false
          this.$store.commit('footStep', data)
        }

        // setting goodsShow and router
        this.$store.commit('goodsShow', data)
        this.$router.push('/home/goodsShow')
      }
    },
    computed: {
      goods () {
        let data = []
        let goods = { even: [], odd: [] }

        if (this.goodsData) {
          for (let i = 0; i < this.goodsData.length; i++) {
            if (this.goodsData[i].max_count > 0 && !this.order) {
              data.push(this.goodsData[i])
            } else if (this.order) {
              data.push(this.goodsData[i])
            } else {
              // delete this goods
            }
          }

          for (let i = 0; i < data.length; i++) {
            if (i % 2 === 0) {
              goods.even.push(data[i])
            } else {
              goods.odd.push(data[i])
            }
          }
        }

        return goods
      }
    },
  }
</script>

<style scoped lang="scss">
    .goods-list {
        width: 100%;

        .list-wrapper {
            display: flex;
            justify-content: space-around;

            .list {
                width: 45%;

                .item {
                    width: 100%;
                    height: 23rem;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
                    border-radius: 10px;
                    overflow: hidden;
                    margin: 0 auto 20px;

                    .img {
                        width: 100%;
                        height: 17rem;
                        cursor: default;
                        user-select: none;
                        @include img(1)
                    }

                    .desc {
                        width: 100%;
                        height: 6rem;
                        box-sizing: border-box;
                        padding: 6px 10px 10px;

                        .title {
                            width: 100%;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            font-size: 14px;
                            color: $black;
                            margin-bottom: 5px;
                        }

                        .price {
                            float: left;
                            font-size: 16px;
                            font-weight: 700;
                            color: $orange;
                        }

                        .watch {
                            float: right;
                            margin-top: 6px;
                            font-size: 12px;
                            color: $grey;
                            vertical-align: baseline;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .material-icons {
                                font-size: 14px;
                            }
                        }
                    }

                    &:active {
                        @include click(10px, .2)
                    }
                }
            }
        }
    }
</style>