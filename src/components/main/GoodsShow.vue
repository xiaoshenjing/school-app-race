<template>
    <div class="goods-show">
        <div class="header-img">
            <transition-group div="ul" class="carousel" :name="select.arrow" mode="out-in">
                <li class="img-wrapper" v-for="(item,index) in goodsData.src" v-show="select.num===index"
                    :key="index">
                    <img class="img" :src="item">
                </li>
            </transition-group>
            <div class="control">
                <div class="left" @click="carousel('left')">
                    <i class="material-icons">arrow_left</i>
                </div>
                <div class="dot">
                    <i
                            class="material-icons"
                            v-for="item in this.select.length"
                            :key="item"
                            @click="carousel(item)"
                    >
                        {{select.num===(parseInt(item)-1)?'lens':'trip_origin'}}
                    </i>
                </div>
                <div class="right" @click="carousel('right')">
                    <i class="material-icons">arrow_right</i>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="header">
                <div class="title">{{goodsData.title}}</div>
                <div class="desc">
                    <div class="time">发布时间：{{goodsData.time}}</div>
                    <div class="count">库存：{{goodsData.max_count}}</div>
                </div>
                <div class="purchase">
                    <div class="price">￥{{goodsData.price.toFixed(2)}}</div>
                    <div class="add-cart" @click="addCart">添加到购物车</div>
                </div>
            </div>
            <div class="main">
                <div class="desc">商品描述：{{goodsData.desc}}</div>
            </div>
            <comment :comment="goodsData.comment" :id="{goodsId:goodsData._id}"></comment>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'GoodsShow',
    components: {
      Comment: () => import('@/components/main/Comment')
    },
    data () {
      return {
        goodsData: {},
        select: {
          num: 0,
          length: 0,
          arrow: ''
        },
      }
    },
    methods: {
      getData () {
        this.goodsData = this.$store.state.goodsShow
        console.log(this.goodsData)
        this.select.length = this.$store.state.goodsShow.src.length
      },
      carousel (direction) {
        switch (direction) {
          case 'left':
            this.select.arrow = 'left'
            this.select.num === 0 ? this.select.num = this.select.length - 1 : this.select.num--
            break
          case 'right':
            this.select.arrow = 'right'
            this.select.num === this.select.length - 1 ? this.select.num = 0 : this.select.num++
            break
        }

        if (typeof direction === 'number') {
          if (direction > this.select.num) {
            this.select.arrow = 'right'
            this.select.num = direction - 1
          } else {
            this.select.arrow = 'left'
            this.select.num = direction - 1
          }
        }
      },
      addCart () {
        let once = true
        this.$store.state.shopCart.forEach(good => {
          if (good.id === this.goodsData.id) {
            once = false
          }
        })

        if (once) {
          this.once = false
          alert('添加成功')
          this.$store.commit('addShopCart', this.goodsData)
        } else {
          alert('已添加到购物车')
        }
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
    .goods-show {
        $height: 37.5rem;

        .header-img {
            width: 100%;
            position: relative;
            height: $height;
            overflow: hidden;
            top: 0;

            .carousel .img-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 0;
                padding-top: 100%;

                .img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 1;
                }

                &.left-enter-active, &.left-leave-active, &.right-enter-active, &.right-leave-active {
                    transition: all .5s;
                }

                &.left-enter, &.right-leave-to {
                    transform: translateX(-100%);
                }

                &.left-leave-to, &.right-enter {
                    transform: translateX(100%);
                }
            }

            .control {
                position: absolute;
                top: 0;
                width: 100%;
                height: $height;

                .left, .right, .dot {
                    position: absolute;
                }

                $arrow_size: 60px;

                .left, .right {
                    top: 50%;
                    transform: translateY(-50%);
                    width: $arrow_size;
                    height: $arrow_size;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .3) inset;
                    opacity: .4;
                    @extend %block-center;

                    .material-icons {
                        font-size: $arrow_size;
                        color: $white;
                    }

                    &.left {
                        left: 1rem;
                    }

                    &.right {
                        right: 1rem;
                    }

                    &:active {
                        opacity: .6;
                        box-shadow: 0 0 20px rgba(0, 0, 0, .3) inset;
                    }
                }

                .dot {
                    width: 100%;
                    height: 2rem;
                    position: absolute;
                    left: 50%;
                    bottom: 1rem;
                    transform: translateX(-50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: .4;

                    .material-icons {
                        font-size: 18px;
                        margin: 5px;
                    }
                }
            }
        }

        .content {
            $f-color: #666;
            $b-border: 2rem solid $white;

            .header {
                border-bottom: $b-border;
                font-size: 18px;
                padding: 10px;
                background-color: #fff;

                .title {
                    font-size: 18px;
                    font-weight: 700;
                    color: $f-color;
                }

                .desc {
                    font-size: 12px;
                    color: $f-color;
                    margin: 10px 0;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    .time {
                        margin-right: 30px;
                    }
                }

                .purchase {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price {
                        font-size: 20px;
                        font-weight: 700;
                        color: $orange;
                        margin-top: 10px;
                    }

                    .add-cart {
                        width: 10rem;
                        height: 2.5rem;
                        border-radius: 10px;
                        background-color: $black;
                        color: $white;
                        font-size: 12px;
                        @extend %block-center;

                        &:active {
                            background-color: $grey;
                        }
                    }
                }
            }

            .main {
                border-bottom: $b-border;
                background-color: #fff;
                padding: 10px;

                .desc {
                    font-size: 16px;
                    color: $grey;
                    text-indent: 2em;
                    line-height: 24px;
                }
            }
        }
    }
</style>