<template>
    <div class="header">
        <div class="left" @click="cancel">
            <i class="material-icons">hdr_weak</i>
        </div>
        <div class="center">
            <div class="title">{{title}}</div>
        </div>
        <div class="right">
            <i class="material-icons">settings</i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'VHeader',
    methods: {
      cancel () {
        this.$store.commit('login', false)
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
        height: 40px;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;

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

            .search {
                width: 80%;
                height: 70%;
                border-radius: 10px;
                background-color: #171721;
                @extend %block-center;

                .text {
                    @include font-color($grey);
                    font-size: 12px;
                }
            }

            .title {
                @include font-color($grey);
                font-size: 12px;
            }
        }
    }
</style>