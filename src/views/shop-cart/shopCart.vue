<template>
    <div class="shop-cart">
        <div v-if="cart">
            <div class="goods" v-for="(good,index) in cart" :key="index" v-show="good.max_count>0">
                <div class="delete" @click="deleteCart(good._id)">
                    <i class="material-icons">cancel</i>
                </div>

                <div class="img" @click="showDetail(good._id)">
                    <img :src="good.src[0]" alt="" width="100%" height="100%">
                </div>

                <div class="content">
                    <div class="title-wrapper">
                        <div class="title">{{good.title}}</div>
                        <div class="max-count">库存：{{good.max_count}}</div>
                    </div>
                    <div class="price">￥ {{good.price.toFixed(2)}}</div>
                    <count class="count" :good="good"></count>
                </div>
            </div>
        </div>
        <div class="cart-wrapper">
            <div class="cart" :class="{active:allCount>0}">
                <div class="car-wrapper" @click="controlList">
                    <div class="car">
                        <i class="material-icons">add_shopping_cart</i>
                        <span class="count" v-text="allCount"></span>
                    </div>
                    <div class="price">￥ {{allPrice}}</div>
                </div>
                <div class="submit" :class="{active:allCount>0}">
                    <span class="text" v-if="allCount<=0">请添加购物车商品</span>
                    <span class="text active" v-if="allCount>0" @click="submit">支付</span>
                </div>
            </div>
            <transition name="list">
                <div class="cart-list" :class="{active:listShow}" v-if="listShow">
                    <div class="header">
                        <div class="title">购物车</div>
                        <div class="empty">
                            <i class="material-icons">delete</i>
                            <span class="clear" @click="empty">清空购物车</span>
                        </div>
                    </div>
                    <div class="content">
                        <div class="item" v-for="(good,index) in cartList" :key="index">
                            <div class="show">
                                <span class="name">{{good.title}}</span>
                                <span class="price">￥{{(good.count * good.price).toFixed(2)}}</span>
                            </div>
                            <count class="count" :good="good"></count>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <payment :pay="pay_check" :sumPrice="Number(sumPrice)" ref="payment" @reset="reset"></payment>
    </div>
</template>

<script>
  export default {
    name: 'shopCart',
    components: {
      Count: () => import('@/components/main/Count'),
      Payment: () => import('@/components/main/Payment')
    },
    data () {
      return {
        cart: [],
        fold: true,
        pay: [],
        pay_check: [],
        sumPrice: 0,
      }
    },
    methods: {
      getData () {
        this.$http.get('/users/get-cart')
          .then(res => {
            if (this.$jwt(res.data)) {
              this.cart = res.data.cart
            }
          })
      },
      controlList () {
        if (this.allCount > 0) {
          this.fold = !this.fold
        }
      },
      empty () {
        this.cart.forEach((good) => {
          good.count = 0
        })
      },
      showDetail (id) {
        this.$http.get('/users/get-goods', {
          params: {
            id: id
          }
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.$store.commit('goodsShow', res.data.goods)
              this.$router.push('/goodsShow')
            }
          })
      },
      submit () {
        this.pay = []

        for (let i = 0; i < this.cart.length; i++) {
          this.pay.push({ goodsId: this.cart[i]._id, count: this.cart[i].count, time: this.$now() })
        }

        this.$http.post('/goods/pay-check', {
          pay: this.pay
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.$refs.payment.open()
              this.pay_check = res.data.pay_check
              this.sumPrice = res.data.sumPrice
            }
          })
      },
      reset (flag) {
        if (flag) {
          this.empty()
          this.getData()
        }
      },
      deleteCart (id) {
        this.$http.post('/users/delete-cart', {
          goodsId: id
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.$store.commit('tip', { reason: res.data.reason, color: 'green', update: new Date() })

              // 商品中删除该 goods
              let index = this.cart.findIndex(item => {
                if (item._id === id) {
                  return item
                }
              })
              this.cart.splice(index, 1)
            }
          })
      }
    },
    computed: {
      allCount () {
        let count = 0
        this.cart.forEach(good => {
          count += good.count
        })
        return count
      },
      allPrice () {
        let price = 0
        this.cart.forEach(good => {
          price += good.price * good.count
        })
        return price.toFixed(2)
      },
      listShow () {
        if (this.allCount <= 0) {
          return false
        }

        return !this.fold
      },
      cartList () {
        return this.cart.filter((good) => {
          return good.count > 0
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
    .shop-cart {
        overflow: hidden;

        .goods {
            margin: 20px auto;
            display: flex;
            align-items: center;
            width: 90%;
            height: 100px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
            position: relative;

            .delete {
                $size: 30px;
                position: absolute;
                top: 0;
                left: 0;
                transform: translate(-40%, -40%);
                z-index: 20;
                width: $size;
                height: $size;

                .material-icons {
                    font-size: $size;
                    color: $grey;

                    &:active {
                        color: $orange;
                    }
                }
            }

            .img {
                height: 100%;
                width: 100px;
                padding: 10px;
                box-sizing: border-box;

                img {
                    border-radius: 10px;
                    @include img(.8)
                }
            }

            .content {
                width: 64%;
                padding: 5px;
                position: relative;

                .title-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 26px;

                    .title {
                        width: 60%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 14px;
                    }

                    .max-count {
                        font-size: 14px;
                    }
                }

                .price {
                    font-size: 18px;
                    color: $orange;
                }

                .count {
                    position: absolute;
                    right: 5px;
                    bottom: 5px;
                }
            }
        }

        .cart-wrapper {
            margin-bottom: 67px;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 888;
            width: 100%;
            height: 70px;

            .cart {
                width: 100%;
                height: 100%;
                @include bgc($black);
                display: flex;
                justify-content: space-between;
                align-items: center;

                .car-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .car {
                        width: 80px;
                        height: 80px;
                        background-color: $black;
                        border-radius: 50%;
                        margin: -20px 0 0 10px;
                        box-shadow: 0 0 10px rgba(255, 255, 255, .4) inset;
                        @extend %block-center;
                        position: relative;

                        .material-icons {
                            font-size: 40px;
                            color: $white;
                        }

                        .count {
                            display: inline-block;
                            width: 30px;
                            height: 20px;
                            background-color: #da495c;
                            border-radius: 10px;
                            position: absolute;
                            font-size: 14px;
                            font-weight: 700;
                            color: $white;
                            top: 0;
                            right: 0;
                            text-align: center;
                            line-height: 20px;
                        }
                    }

                    .price {
                        font-size: 18px;
                        margin-left: 20px;
                        color: $grey;
                    }

                    &:active {
                        .car {
                            box-shadow: 0 0 20px rgba(255, 255, 255, .8) inset;

                            .material-icons {
                                color: $orange;
                            }
                        }
                    }
                }

                .submit {
                    width: 150px;
                    height: 70px;
                    background-color: #403e54;


                    .text {
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        line-height: 70px;
                        text-align: center;
                        font-size: 16px;
                        color: $grey;
                    }

                    &.active {
                        &:active {
                            background-color: #4b952f;

                            .text {
                                color: #999;
                            }
                        }
                    }
                }

                &.active {
                    .price {
                        color: $orange;
                    }

                    .submit {
                        background-color: #67C23A;

                        .text {
                            color: $white;
                        }
                    }
                }
            }

            .cart-list {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 300px;
                background-color: #fff;
                box-shadow: 0 -5px 10px rgba(0, 0, 0, .2);
                z-index: -1;
                transform: translateY(-100%);

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 40px;
                    padding: 0 20px;
                    @include border-1px(#ccc);

                    .title {
                        font-size: 18px;
                        font-weight: 700;
                    }

                    .empty {
                        @extend %block-center;

                        .clear, .material-icons {
                            color: $blue;
                        }

                        .clear {
                            font-size: 12px;
                            margin-left: 5px;
                        }

                        &:active {
                            .clear, .material-icons {
                                color: $orange;
                            }
                        }
                    }
                }

                .content {
                    width: 100%;

                    .item {
                        width: 100%;
                        height: 40px;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .show {
                            width: 70%;
                            overflow: hidden;
                            white-space: nowrap;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;

                            .name {
                                width: 70%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                font-size: 14px;
                                color: $black;
                                text-align: center;
                            }

                            .price {
                                width: 20%;
                                font-size: 14px;
                                color: $orange;
                                text-align: center;
                            }
                        }
                    }
                }

                &.list-enter-active, &.list-leave-active {
                    transition: all .5s;
                }

                &.list-enter, &.list-leave-to {
                    transform: translateY(0);
                }
            }
        }
    }
</style>