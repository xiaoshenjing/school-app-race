<template>
    <div class="home">
        <swipe :auto="4000" class="swipe">
            <swipe-item class="item" v-for="(item,index) in carousel" :key="index">
                <a :href="item.href"><img :src="item.src" alt="" width="100%" height="100%"></a>
            </swipe-item>
        </swipe>
        <div class="classification">
            <div class="item">
                <div class="icon">
                    <i class="material-icons">face</i>
                </div>
                <i class="name">自营商品</i>
            </div>
            <div class="item">
                <div class="icon">
                    <i class="material-icons">location_city</i>
                </div>
                <i class="name">校营商品</i>
            </div>
            <div class="item">
                <div class="icon">
                    <i class="material-icons">person_outline</i>
                </div>
                <i class="name">匿名商品</i>
            </div>
            <div class="item">
                <div class="icon">
                    <i class="material-icons">person</i>
                </div>
                <i class="name">实名商品</i>
            </div>
        </div>
        <div class="tip">
            <div class="line"></div>
            <div class="title">热卖商品</div>
            <div class="line"></div>
        </div>
        <goods-list :goods="goods"></goods-list>
    </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'

  export default {
    name: 'home',
    components: {
      SwipeItem,
      Swipe,
      GoodsList: () => import('@/components/main/GoodsList')
    },
    data () {
      return {
        goods: [],
        carousel: []
      }
    },
    methods: {
      getData () {
        this.$api.post('/home/goods')
          .then((res) => {
            if (res.status === 200) {
              this.goods = res.data.goods
              this.carousel = res.data.carousel
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
    .home {
        .swipe {
            width: 100%;
            height: 150px;
            overflow: hidden;
            margin-bottom: 5px;

            .item {
                width: 100%;
                height: 100%;
                text-align: center;
                background-color: #f00;
            }
        }

        .classification {
            width: 100%;
            height: 90px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .item {
                @extend %block-center;
                flex-direction: column;

                .icon {
                    width: 50px;
                    height: 50px;
                    @extend %block-center;
                    border-radius: 50%;
                    margin-bottom: 8px;
                    cursor: default;

                    .material-icons {
                        color: $white;
                    }

                    &:active {
                        @include click(50%, .5);
                    }
                }

                .name {
                    font-style: normal;
                    font-size: 12px;
                    margin-bottom: 5px;
                }

                &:nth-of-type(1) .icon {
                    background-color: #ff737a;
                }

                &:nth-of-type(2) .icon {
                    background-color: #7ce5ff;
                }

                &:nth-of-type(3) .icon {
                    background-color: #ffbc7f;
                }

                &:nth-of-type(4) .icon {
                    background-color: #adb3fd;
                }
            }
        }

        .tip {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 10px;

            .line {
                width: 40%;
                @include border-1px(#ccc);
            }

            .title {
                font-size: 14px;
            }
        }
    }
</style>