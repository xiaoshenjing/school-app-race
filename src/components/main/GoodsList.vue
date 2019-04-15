<template>
    <div class="goods-list">
        <div class="list" v-for="(item,index) in goods" :key="index">
            <div class="img">
                <img @click.prevent="" :src="item.img" alt="" width="100%" height="100%" style="opacity: .5">
            </div>
            <div class="desc">
                <div class="title">{{item.title}}</div>
                <div class="price">￥{{item.price|formatPrice}}</div>
                <div class="num">{{item.num}}</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'GoodsList',
    props: {
      goods: {
        type: Array
      }
    },
    filters: {
      formatPrice (val) {
        let str = String(val).split('.')
        str = str[0] + '.' + str[1].padEnd(2, '0')
        return str
      }
    }
  }
</script>

<style scoped lang="scss">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .list {
            width: 17rem;
            height: 30rem;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
            border-radius: 20px;
            overflow: hidden;
            margin: 0 auto 20px;

            .img {
                width: 100%;
                height: 24rem;
                cursor: default;
                user-select: none;
            }

            .desc {
                width: 100%;
                height: 6rem;
                box-sizing: border-box;
                padding: 6px 10px 10px;

                .title {
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 14px;
                    color: $black;
                    margin-bottom: 5px;
                }

                .price {
                    float: left;
                    font-size: 16px;
                    font-weight: 700;
                    color: $orange;
                }

                .num {
                    float: right;
                    margin-top: 6px;
                    font-size: 12px;
                    color: $grey;
                    vertical-align: baseline;
                }
            }

            &:active {
                @include click(20px, .2)
            }

            &:last-of-type {
                transform: translate3d(-58%, 0, 0);
            }
        }
    }
</style>