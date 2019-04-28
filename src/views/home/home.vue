<template>
    <div class="home">
        <swipe :carousel="carousel" :height="'200px'"></swipe>
        <div class="classification">
            <router-link tag="div" to="/home/detailGoods/1" class="item">
                <div class="icon">
                    <i class="material-icons">face</i>
                </div>
                <i class="name">学生自营</i>
            </router-link>
            <router-link tag="div" to="/home/detailGoods/2" class="item">
                <div class="icon">
                    <i class="material-icons">location_city</i>
                </div>
                <i class="name">校网经营</i>
            </router-link>
            <router-link tag="div" to="/home/detailGoods/3" class="item">
                <div class="icon">
                    <i class="material-icons">person_outline</i>
                </div>
                <i class="name">校会托售</i>
            </router-link>
        </div>
        <divider :lineWidth="'40%'" :content="{title:'热卖商品',pattern:'—'}"></divider>
        <goods-list :goodsData="goods"></goods-list>
        <loading :loading="loading"></loading>
    </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
      GoodsList: () => import('@/components/main/GoodsList'),
      Loading: () => import('@/components/main/Loading'),
      Swipe: () => import('@/components/main/Swipe'),
      Divider: () => import('@/components/main/Divider')
    },
    data () {
      return {
        loading: false,
        goods: [],
        publicPath: process.env.BASE_URL,
        carousel: [
          { href: '#', src: 'goods1.png' },
          { href: '#', src: 'goods2.png' },
          { href: '#', src: 'goods3.png' },
          { href: '#', src: 'goods4.png' },
        ]
      }
    },
    methods: {
      getData () {
        this.$http.get('/goods')
          .then((res) => {
            if (this.$jwt(res.data)) {
              this.goods = res.data.goods
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
                }

                .name {
                    font-style: normal;
                    color: $font-color-1;
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

                &:active {
                    .icon {
                        @include click(50%, .5);
                    }

                    .name {
                        color: $black;
                    }
                }
            }
        }
    }
</style>