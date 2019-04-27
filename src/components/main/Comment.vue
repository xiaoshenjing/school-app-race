<template>
    <div class="wrapper">
        <div class="post">
            <textarea class="comment" v-model="content"></textarea>
            <button class="submit" @click="submit">发表留言</button>
        </div>
        <transition name="comment" mode="out-in">
            <div v-if="arrowFlag&&comment.length" class="all">
                <div class="item" v-for="(item,index) in comment" :key="index">
                    <div class="origin">
                        <div class="person">{{item.person}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                    <div class="content">{{item.content}}</div>
                </div>
            </div>
        </transition>
        <div class="all-comment" @click="arrowFlag=!arrowFlag" v-if="comment.length">
            <span class="text">{{arrowFlag?'收起留言':'展开留言'}}</span>
            <i class="material-icons" v-show="!arrowFlag">keyboard_arrow_down</i>
            <i class="material-icons" v-show="arrowFlag">keyboard_arrow_up</i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      comment: {
        type: Array
      },
      goodsId: {
        type: String
      }
    },
    data () {
      return {
        arrowFlag: false,
        content: ''
      }
    },
    methods: {
      submit () {
        if (!this.content) {
          return this.$store.commit('tip', { reason: '内容不能为空', color: 'red', update: new Date() })
        }

        this.$http.post('/goods/comment', {
          goodsId: this.goodsId,
          person: this.$store.state.loginMessage.student_id,
          time: this.$now(),
          content: this.content
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.comment.unshift({
                content: this.content,
                person: this.$store.state.loginMessage.student_id,
                time: this.$now(),
              })
            }
            this.$store.commit('tip', { reason: res.data.reason, color: 'green', update: new Date() })
            this.content = ''
          })
      },
      init () {
        this.comment.reverse()
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style scoped lang="scss">
    .wrapper {
        overflow: hidden;

        .post {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            padding: 10px;

            .comment {
                width: 100%;
                display: block;
                height: 60px;
                border-radius: 10px;
                padding: 10px;
                box-sizing: border-box;
                outline: none;
                margin-bottom: 10px;
            }

            .submit {
                width: 9rem;
                height: 3rem;
                border-radius: 10px;
                border: none;
                outline: none;
                background-color: $black;
                text-align: center;
                font-size: 14px;
                color: $white;
                letter-spacing: 2px;

                &:active {
                    background-color: $grey;
                }
            }
        }

        .all-comment {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            width: 100%;
            background-color: $white;
            font-size: 16px;
            color: $grey;

            .text {
                margin-right: 10px;
            }
        }

        .all {
            position: relative;
            bottom: 0;
            left: 0;
            font-size: 14px;
            padding: 10px;

            .item {
                margin-bottom: 10px;
                padding-bottom: 10px;
                @include border-1px(#ccc);

                .origin {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 10px;

                    .person {
                        margin-right: 10px;
                        font-size: 16px;
                        color: $blue;
                    }

                    .time {
                        font-size: 12px;
                        color: $grey;
                    }
                }

                .content {
                    font-size: 14px;
                    color: $font-color-2;
                }

                &:last-of-type {
                    margin-bottom: 0;
                    padding-bottom: 5px;

                    &:after {
                        display: none;
                    }
                }
            }

            &.comment-enter-active, &.comment-leave-active {
                transition: all .2s;
            }

            &.comment-enter, &.comment-leave-active {
                transform: translateY(100%);
            }
        }
    }
</style>