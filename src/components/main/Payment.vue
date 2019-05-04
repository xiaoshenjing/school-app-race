<template>
    <transition name="payment" mode="out-in">
        <div class="payment" v-show="flag" @click.self="hide">
            <div class="pay-wrapper">
                <div class="pay">
                    <div class="item" v-for="(item,index) in pay" :key="index">
                        <div class="content">
                            <div class="header">
                                <div class="title">{{item.title}}</div>
                                <div class="count">x {{item.count}}</div>
                            </div>
                            <div class="main">
                                <div class="price">￥ {{item.price}}</div>
                                <div class="time">{{item.time}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="sum">
                        ￥ {{sumPrice}}
                    </div>
                    <button class="submit" @click="submit">确认支付</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    props: {
      pay: Array,
      sumPrice: Number
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
      },
      submit () {
        this.$http.post('/goods/pay', {
          pay: this.pay
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.hide()
              this.$store.commit('tip', { reason: res.data.reason, color: 'green', update: new Date() })
              this.$emit('reset', true)
            }
          })
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
            background-color: #fff;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 0 30px rgba(0, 0, 0, .4);
            box-sizing: border-box;

            .pay {
                width: 100%;
                height: 100%;
                overflow-y: scroll;

                .item {
                    width: 90%;
                    margin: 0 auto 20px;
                    border-radius: 10px;
                    background-color: $white;
                    padding: 10px;

                    .content {
                        font-size: 16px;

                        .header {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin-bottom: 10px;

                            .title {
                                width: 70%;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }

                            .count {
                                color: $grey;
                            }
                        }

                        .main {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            color: $grey;

                            .price {
                                color: $orange;
                                font-size: 18px;
                            }
                        }
                    }
                }

                .sum {
                    width: 90%;
                    padding: 10px;
                    text-align: right;
                    font-size: 24px;
                    color: $orange;
                    margin: 0 auto;
                }

                .submit {
                    display: block;
                    margin: 10px auto;
                    width: 90%;
                    height: 3rem;
                    background-color: $black;
                    border-radius: 10px;
                    line-height: 3rem;
                    font-size: 18px;
                    color: $white;
                    border: none;
                    outline: none;
                }
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