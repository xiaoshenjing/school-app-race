<template>
    <div class="wallet-wrapper">
        <div class="header">
            <div>
                <span class="title">总资产：</span>
                <span class="money">{{personData.money}} 元</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        personData: ''
      }
    },
    methods: {
      init () {
        this.personData = this.$store.state.personMessage
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style scoped lang="scss">
    .wallet-wrapper {
        .header {
            margin-top: -2px;
            width: 100%;
            height: 8rem;
            background-color: $black;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
            @extend %block-center;

            .title {
                font-size: 24px;
                color: $white;
            }

            .money {
                font-size: 20px;
                color: $blue;
            }
        }
    }
</style>