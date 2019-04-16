<template>
    <div class="footer">
        <div
                class="icon"
                v-for="(item,index) in items"
                :key="index"
                :class="{'active':current===item.name}"
                @click="jump(item.name)"
        >
            <i class="material-icons">{{item.icon}}</i>
            <i class="font" v-if="item.title">{{item.title}}</i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'VFooter',
    data () {
      return {
        current: 'home',
        items: [
          { name: 'home', icon: 'home', title: '首页' },
          { name: 'find', icon: 'notifications', title: '发现' },
          { name: 'add', icon: 'control_point', title: '' },
          { name: 'shop-cart', icon: 'shopping_cart', title: '购物车' },
          { name: 'mine', icon: 'person', title: '我的' },
        ]
      }
    },
    methods: {
      jump (name) {
        this.current = name
        this.$store.commit('headerTitle', name)
        this.$router.push(name)
      },
      init () {
        this.current = this.$store.state.headerTitle
        this.$router.push(this.$store.state.headerTitle)
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style scoped lang="scss">
    .footer {
        @include bgc($black);
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        height: 58px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 10px;

        .icon {
            width: 40px;
            height: 36px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;

            .font, .material-icons {
                color: #fafafa;
            }

            .material-icons {
                font-size: 28px;
            }

            .font {
                font-size: 10px;
                font-style: normal;
            }

            &:nth-of-type(3) {
                @include bgc($black);
                align-self: flex-start;
                width: 30px;
                height: 50px;
                margin-top: -10px;
                border-radius: 50%;

                .material-icons {
                    font-size: 50px;
                    margin-top: 10px;
                }
            }

            &.active {
                .font, .material-icons {
                    @include font-color($orange);
                    transform: scale(1.2);
                }
            }
        }
    }
</style>