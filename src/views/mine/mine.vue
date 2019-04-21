<template>
    <div class="mine">
        <div class="bg">
            <div class="avatar">
                <img :src="personData.avatar" width="100%" height="100%">
            </div>
            <div class="message">student_ID：{{personData.student_id}}</div>
        </div>
        <div class="title">
            <router-link tag="div" to="/mine/news" class="item">
                <span class="num" v-text="titleNum.news"></span>
                <span class="tile">我的趣事</span>
            </router-link>
            <router-link tag="div" to="/mine/foot-step" class="item">
                <span class="num" v-text="titleNum.foot_step"></span>
                <span class="tile">我的足迹</span>
            </router-link>
            <router-link tag="div" to="/mine/goods" class="item">
                <span class="num" v-text="titleNum.goods"></span>
                <span class="tile">我的商品</span>
            </router-link>
        </div>
        <div class="list-wrapper">
            <router-link tag="div" to="/mine/address" class="list">
                <i class="material-icons">place</i>
                <span class="subheading">地址管理</span>
            </router-link>
            <router-link tag="div" to="/mine/wallet" class="list">
                <i class="material-icons">account_balance_wallet</i>
                <span class="subheading">我的钱包</span>
            </router-link>
            <router-link tag="div" to="/mine/order" class="list">
                <i class="material-icons">assignment</i>
                <span class="subheading">我的订单</span>
            </router-link>
            <router-link tag="div" to="/mine/callback" class="list">
                <i class="material-icons">rate_review</i>
                <span class="subheading">意见反馈</span>
            </router-link>
            <div class="school-logo">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3999383367,725927817&fm=26&gp=0.jpg"
                     width="100%">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      personData: {
        type: Object
      }
    },
    data () {
      return {
        titleNum: {
          news: 0,
          foot_step: 0,
          goods: 0,
        }
      }
    },
    mounted () {
      this.titleNum.news = this.personData.news.length
      this.titleNum.goods = this.personData.goods.length
      this.titleNum.foot_step = this.personData.foot_step.length
    }
  }
</script>

<style scoped lang="scss">
    .mine {
        .bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 20rem;
            background-color: $black;
            border-bottom-right-radius: 40%;
            border-bottom-left-radius: 40%;
            z-index: -1;

            .avatar {
                overflow: hidden;
                position: fixed;
                top: 50px;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 60px;
                background-color: #fff;
                border-radius: 50%;
            }

            .message {
                position: fixed;
                top: 120px;
                left: 50%;
                transform: translateX(-50%);
                color: $white;
                font-size: 12px;
                font-weight: lighter;
            }
        }

        .title {
            width: 80%;
            height: 70px;
            background-color: #fafafa;
            margin: 150px auto 0;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
            display: flex;
            justify-content: space-around;
            align-items: center;

            .item {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 60px;
                width: 20%;

                .num {
                    font-size: 24px;
                    font-weight: 700;
                    color: $grey;

                    &:active {
                        color: $orange;
                    }
                }

                .tile {
                    font-size: 12px;
                    color: $black;
                }
            }
        }

        .list-wrapper {
            width: 80%;
            display: flex;
            flex-wrap: wrap;
            margin: 60px auto;
            position: relative;

            .school-logo {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
                width: 120%;
                opacity: .08;
            }

            .list {
                width: 50%;
                height: 16rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                opacity: .8;

                &:active {
                    .material-icons {
                        color: $orange;
                        transform: scale(1.2);
                    }

                    .subheading {
                        color: $orange;
                    }
                }

                .material-icons {
                    font-size: 60px;
                    margin-bottom: 20px;
                }

                .subheading {
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }
</style>