<template>
    <div class="home">
        <swipe :carousel="carousel" :height="'200px'"></swipe>
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
        <divider :lineWidth="'40%'" :content="{title:'热卖商品',pattern:'—'}"></divider>
        <goods-list :goods="goods"></goods-list>
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
        loading: true,
        goods: {
          odd: [],
          even: []
        },
        carousel: []
      }
    },
    methods: {
      getData () {
        this.$api.post('/home')
          .then((res) => {
            if (res.status === 200) {
              for (let i = 0; i < res.data.goods.length; i++) {
                if (i % 2 === 0) {
                  this.goods.even.push(res.data.goods[i])
                } else {
                  this.goods.odd.push(res.data.goods[i])
                }
              }
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
    }
</style>