<template>
    <div>
        <div class="banner">
            <img src="./images/order.jpg" alt="">
        </div>
        <div class="order-wrapper">
            <div class="order" v-for="(item,index) in orderData" :key="index" @click="getGoods(item.goodsId)">
                <div class="left">
                    <img :src="item.src" alt="" width="100%" height="100%">
                </div>
                <div class="right">
                    <div class="desc">
                        <div class="title">{{item.title}}</div>
                        <div class="count">x {{item.count}}</div>
                    </div>
                    <div class="price-msg">
                        <div class="price">￥ {{item.price}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                    <div class="id">订单编号：{{item.goodsId}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {
        orderData: [],
        goods: {}
      }
    },
    methods: {
      init () {
        this.$store.commit('headerTitle', 'order')
        this.$http.get('/users/get-order')
          .then(res => {
            if (this.$jwt(res.data)) {
              this.orderData = res.data.order
            }
          })
      },
      getGoods (id) {
        this.$http.get('/users/get-goods', {
          params: {
            id: id
          }
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.goods = res.data.goods
              this.$store.commit('goodsShow',this.goods)
              this.$router.push('/goodsShow')
            }
          })
      }
    },
    created () {
      this.init()
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

    .order-wrapper {
        .order {
            padding-right: 10px;
            margin: 0 auto 20px;
            width: 90%;
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                width: 90px;
                height: 90px;
                border-radius: 10px;
                overflow: hidden;
            }

            .right {
                font-size: 12px;
                color: $font-color-1;
                height: 100%;
                width: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                .desc {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .price-msg {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price {
                        font-size: 16px;
                        color: $orange;
                    }
                }

                .id {
                    font-size: 12px;
                    color: $grey;
                }
            }
        }

        .order:active {
            background-color: $white;
            border-radius: 10px;
        }
    }
</style>