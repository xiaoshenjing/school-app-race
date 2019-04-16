<template>
    <div class="shop-cart">
        <div class="goods" v-for="(good,index) in cart" :key="index">
            <div class="img">
                <img :src="good.src" alt="" width="100%" height="100%">
            </div>
            <div class="content">
                <div class="title">{{good.title}}</div>
                <div class="price">￥ {{good.price}}</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'shopCart',
    data () {
      return {
        cart: []
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
            justify-content: space-between;
            align-items: center;
            width: 35rem;
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
                padding: 5px;

                .title {
                    width: 240px;
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
            }
        }
    }
</style>