<template>
    <div class="goods-show">
        <div class="header-img">
            <ul class="carousel">
                <transition-group name="show" mode="out-in">
                    <li class="img-wrapper" v-for="(item,index) in goodsData.src" v-show="select.num===index"
                        :key="index">
                        <img class="img" :src="item" alt="" width="100%">
                    </li>
                </transition-group>
            </ul>
            <div class="control">
                <div class="left" @click="carousel(0)">
                    <i class="material-icons">arrow_left</i>
                </div>
                <div class="dot">
                    <i
                            class="material-icons"
                            v-for="item in this.select.length"
                            :key="item"
                    >
                        {{select.num===(parseInt(item)-1)?'lens':'trip_origin'}}
                    </i>
                </div>
                <div class="right" @click="carousel">
                    <i class="material-icons">arrow_right</i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'GoodsShow',
    data () {
      return {
        goodsData: {},
        select: {
          num: 0,
          length: 0,
        }
      }
    },
    methods: {
      getData () {
        // console.log(this.$route.params)
        this.$api.post('/goods_show')
          .then(res => {
            if (res.status === 200) {
              this.goodsData = res.data
              this.select.length = this.goodsData.src.length
            }
          })
      },
      carousel (direction = 1) {
        if (direction === 1) {
          this.select.num === 2 ? this.select.num = 0 : this.select.num++
        } else {
          this.select.num === 0 ? this.select.num = 2 : this.select.num--
        }
        console.log(this.select.num)
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
    .goods-show {
        .header-img {
            width: 100%;
            position: relative;
            height: 37.5rem;

            .carousel {
                width: 100%;
                height: 100%;

                .img-wrapper {
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
                    }

                    &.show-enter-active, &.show-leave-active {
                        transition: all .5s;
                    }

                    &.show-enter {
                        transform: translateX(100%);
                    }

                    &.show-leave-to {
                        transform: translateX(-100%);
                    }
                }
            }

            .control {
                $arrow_size: 60px;

                .left, .right, .dot {
                    position: absolute;
                }

                .left, .right {
                    top: 50%;
                    transform: translateY(-50%);
                    width: $arrow_size;
                    height: $arrow_size;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .3) inset;
                    opacity: .6;

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
                        opacity: .8;
                        box-shadow: 0 0 20px rgba(0, 0, 0, .3) inset;
                    }
                }

                .dot {
                    width: 2rem;
                    position: absolute;
                    left: 50%;
                    bottom: 1rem;
                    transform: translateX(-50%);
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            }
        }
    }
</style>