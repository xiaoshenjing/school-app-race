<template>
    <transition name="tip">
        <div class="tip" :class="tip.color" v-show="tip.flag">
            <div class="desc">
                {{tip.content}}
            </div>
            <div class="cancel" @click="cancel">
                <i class="material-icons">clear</i>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    data () {
      return {
        tip: {
          flag: false,
          content: '',
          timer: '',
          color: '',
        }
      }
    },
    watch: {
      '$store.state.tip': function (newVal, oldVal) {
        this.tip.flag = true
        this.tip.content = newVal.reason
        this.tip.color = newVal.color
        clearTimeout(this.tip.timer)
        this.tip.timer = setTimeout(() => {
          this.tip.flag = false
        }, 3000)
      }
    },
    methods: {
      cancel () {
        this.tip.flag = false
        clearTimeout(this.tip.timer)
      }
    }
  }
</script>

<style scoped lang="scss">
    %red {
        border: 1px solid #F56C6C;
        box-shadow: 0 0 10px rgba(245, 108, 108, .2);
    }

    %yellow {
        border: 1px solid #E6A23C;
        box-shadow: 0 0 10px rgba(230, 162, 60, .2);
    }

    %green {
        border: 1px solid #67C23A;
        box-shadow: 0 0 10px rgba(103, 194, 58, .2);
    }

    .tip {
        position: fixed;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        background-color: $white;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 60%;

        .desc {
            width: 100%;
            margin-bottom: 20px;
            text-align: center;
            line-height: 25px;
            font-size: 18px;
            padding: 10px;
        }

        .cancel {
            width: 50px;
            height: 50px;
            @extend %block-center;
            border-radius: 50%;

            .material-icons {
                font-size: 30px;
            }

            &:active {
                transform: scale(1.2);
                background-color: $grey;
            }
        }

        &.red {
            @extend %red;

            .cancel {
                @extend %red;
            }
        }

        &.green {
            @extend %green;

            .cancel {
                @extend %green;
            }
        }

        &.yellow {
            @extend %yellow;

            .cancel {
                @extend %yellow;
            }
        }

        &.tip-enter-active, &.tip-leave-active {
            transition: opacity 1s;
        }

        &.tip-enter, &.tip-leave-to {
            opacity: 0;
        }
    }
</style>