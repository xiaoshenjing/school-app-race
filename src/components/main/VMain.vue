<template>
    <div class="main">
        <swipe :auto="2000" :show-indicators="false" class="swipe">
            <swipe-item class="item">111111111111</swipe-item>
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
    </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'

  export default {
    name: 'VMain',
    components: {
      SwipeItem,
      Swipe,
    }
  }
</script>

<style scoped lang="scss">
    .main {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 68px;

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
            @include border-1px($grey);

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
                        position: relative;

                        @extend %click;
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