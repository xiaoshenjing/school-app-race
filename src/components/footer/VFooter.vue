<template>
    <div class="footer">
        <div
                class="icon"
                v-for="item in items"
                :key="item.id"
                :class="{'active':current===item.id}"
                @click="current=item.id"
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
        current: 0,
        items: [
          { id: 0, icon: 'home', title: '首页' },
          { id: 1, icon: 'notifications', title: '发现' },
          { id: 2, icon: 'control_point', title: '' },
          { id: 3, icon: 'shopping_cart', title: '购物车' },
          { id: 4, icon: 'person', title: '我的' },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    .footer {
        width: 100%;
        background-color: #2a293b;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 52px;
        display: flex;
        justify-content: space-around;
        align-items: center;

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
                font-size: 24px;
            }

            .font {
                font-size: 8px;
                font-style: normal;
            }

            &:nth-of-type(3) {
                align-self: flex-start;
                width: 30px;
                height: 50px;
                margin-top: -10px;
                background-color: #2a293b;
                border-radius: 50%;

                .material-icons {
                    font-size: 40px;
                    margin-top: 10px;
                }
            }

            &.active {
                .font, .material-icons {
                    color: skyblue;
                    transform: scale(1.2);
                }
            }
        }
    }
</style>