<template>
    <div class="header">
        <div class="left" @click="back">
            <i class="material-icons">hdr_weak</i>
        </div>
        <div class="center">
            <div class="title">{{title}}</div>
        </div>
        <router-link tag="div" to="/set" class="right">
            <i class="material-icons">settings</i>
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'VHeader',
    methods: {
      back () {
        this.$router.go(-1)
      }
    },
    computed: {
      title () {
        let title = ''
        switch (this.$store.state.headerTitle) {
          case 'home':
            title = '首页'
            break
          case 'find':
            title = '校园趣事'
            break
          case 'add':
            title = '发布'
            break
          case 'shop-cart':
            title = '购物车'
            break
          case 'mine':
            title = '我的信息'
            break
          case '1':
            title = '学生自营'
            break
          case '2':
            title = '校网经营'
            break
          case '3':
            title = '校会托售'
            break
          case 'goods':
            title = '我的商品'
            break
          case 'footStep':
            title = '我的足迹'
            break
          case 'order':
            title = '我的订单'
            break
          case 'news':
            title = '我的趣事'
            break
        }
        return title
      }
    }
  }
</script>

<style scoped lang="scss">
    .header {
        width: 100%;
        @include bgc($black);
        height: 50px;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 998;

        .left, .right {
            width: 60px;
            height: 100%;
            @extend %block-center;

            .material-icons {
                @include font-color($white);

                &:hover {
                    @include font-color($orange);
                }
            }
        }

        .center {
            width: 100%;
            height: 100%;
            @extend %block-center;

            .title {
                @include font-color($grey);
                font-size: 18px;
            }
        }
    }
</style>