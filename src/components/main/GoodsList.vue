<template>
    <div class="goods-list">
        <div class="list-wrapper">
            <div class="list">
                <div class="item" v-for="(item,index) in goods.even" :key="index" @click="showDetail(item.id)">
                    <div class="img">
                        <img @click.prevent="" :src="item.img" alt="" width="100%" height="100%">
                    </div>
                    <div class="desc">
                        <div class="title">{{item.title}}</div>
                        <div class="price">￥{{item.price|formatPrice}}</div>
                        <div class="num">{{item.num}}</div>
                    </div>
                </div>
            </div>

            <div class="list">
                <div class="item" v-for="(item,index) in goods.odd" :key="index" @click="showDetail(item.id)">
                    <div class="img">
                        <img @click.prevent="" :src="item.img" alt="" width="100%" height="100%">
                    </div>
                    <div class="desc">
                        <div class="title">{{item.title}}</div>
                        <div class="price">￥{{item.price|formatPrice}}</div>
                        <div class="num">{{item.num}}</div>
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
      }
    },
    methods: {
      showDetail (id) {
        this.$router.push('/goodsShow/' + id)
      }
    },
    filters: {
      formatPrice (val) {
        let str = String(val).split('.')
        str = str[0] + '.' + str[1].padEnd(2, '0')
        return str
      }
    },
    computed: {
      goods () {
        let goods = { even: [], odd: [] }

        if (this.goodsData) {
          for (let i = 0; i < this.goodsData.length; i++) {
            if (i % 2 === 0) {
              goods.even.push(this.goodsData[i])
            } else {
              goods.odd.push(this.goodsData[i])
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
                    border-radius: 20px;
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

                        .num {
                            float: right;
                            margin-top: 6px;
                            font-size: 12px;
                            color: $grey;
                            vertical-align: baseline;
                        }
                    }

                    &:active {
                        @include click(20px, .2)
                    }
                }
            }
        }
    }
</style>