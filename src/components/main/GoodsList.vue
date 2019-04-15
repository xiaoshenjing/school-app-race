<template>
    <div class="goods-list">
        <div class="list" v-for="(item,index) in goods" :key="index">
            <div class="img">
                <img :src="item.img" alt="">
            </div>
            <div class="desc">
                <div class="title">{{item.title}}</div>
                <div class="price">￥{{item.price}}</div>
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
    }
  }
</script>

<style scoped lang="scss">
    .goods-list {
        .list {
            width: 46%;
            height: 300px;
            background-color: #f00;
            border-radius: 10px;
            overflow: hidden;
        }
    }
</style>