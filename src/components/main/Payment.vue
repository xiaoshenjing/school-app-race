<template>
    <transition name="payment" mode="out-in">
        <div class="payment" v-show="flag" @click="hide">
            <div class="pay-wrapper">
                <div class="pay">
                    Payment
                    {{pay}}
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    props: {
      pay: Array,
    },
    data () {
      return {
        flag: false
      }
    },
    methods: {
      hide () {
        this.flag = false
      },
      open () {
        this.flag = true
      }
    },
  }
</script>

<style scoped lang="scss">
    .payment {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 19;
        background-color: rgba(0, 0, 0, .3);

        .pay-wrapper {
            width: 80%;
            height: 50%;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 20;
            background-color: $white;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 0 30px rgba(0, 0, 0, .4);
            box-sizing: border-box;

            .pay {
                width: 100%;
                height: 100%;
                overflow-y: scroll;
            }
        }

        &.payment-enter-active, &.payment-leave-active {
            transition: opacity .5s;
        }

        &.payment-enter, &.payment-leave-to {
            opacity: 0;
        }
    }
</style>