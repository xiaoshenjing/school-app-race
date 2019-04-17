<template>
    <div class="shop-cart">
        <div class="goods" v-for="(good,index) in cart" :key="index">
            <div class="img">
                <img :src="good.src" alt="" width="100%" height="100%">
            </div>
            <div class="content">
                <div class="title">{{good.title}}</div>
                <div class="price">￥ {{good.price}}</div>
                <count class="count" :good="good"></count>
            </div>
        </div>
        <div class="cart-wrapper" :class="{active:allCount>0}">
            <div class="cart">
                <div class="car-wrapper">
                    <div class="car" @click="controlList">
                        <i class="material-icons">add_shopping_cart</i>
                        <span class="count" v-text="allCount">56</span>
                    </div>
                    <div class="price">￥ {{allPrice}}</div>
                </div>
                <div class="submit">
                    <span class="text" v-if="allCount<=0">请添加购物车商品</span>
                    <span class="text" v-if="allCount>0">支付</span>
                </div>
            </div>
            <transition name="list">
                <div class="cart-list" :class="{active:listShow}" v-if="listShow">
                    <div class="header">
                        <div class="title">购物车</div>
                        <div class="empty">
                            <i class="material-icons">delete</i>
                            <span class="clear">清空购物车</span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'shopCart',
    components: {
      Count: () => import('@/components/main/Count')
    },
    data () {
      return {
        cart: [],
        fold: true
      }
    },
    methods: {
      getData () {
        this.$api.post('/shop_cart')
          .then(res => {
            if (res.status === 200) {
              this.cart = res.data
            }
          })
      },
      controlList () {
        if (this.allCount > 0) {
          this.fold = !this.fold
        }
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
        return price
      },
      listShow () {
        if (this.allCount <= 0) {
          return false
        }

        return !this.fold
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
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);

            .img {
                height: 100%;
                width: 100px;
                padding: 10px;
                box-sizing: border-box;

                img {
                    border-radius: 10px;
                    @include img(.4)
                }
            }

            .content {
                width: 64%;
                padding: 5px;
                position: relative;

                .title {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-bottom: 26px;
                    font-size: 14px;
                }

                .price {
                    font-size: 18px;
                    color: $orange;
                }

                .count {
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                }
            }
        }

        .cart-wrapper {
            margin-bottom: 67px;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 999;
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
                            font-size: 50px;
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

                        &:active {
                            box-shadow: 0 0 20px rgba(255, 255, 255, .8) inset;

                            .material-icons {
                                color: $orange;
                            }
                        }
                    }

                    .price {
                        font-size: 18px;
                        margin-left: 20px;
                        color: $grey;
                    }
                }

                .submit {
                    width: 150px;
                    height: 70px;
                    background-color: #403e54;
                    @extend %block-center;

                    .text {
                        font-size: 16px;
                        color: $grey;
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