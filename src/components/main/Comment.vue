<template>
    <div class="wrapper">
        <div class="post">
            <textarea class="comment"></textarea>
            <button class="submit">发布</button>
        </div>
        <transition name="comment" mode="out-in">
            <div v-if="arrowFlag&&comment" class="all">
                <div class="item" v-for="(item,index) in comment" :key="index">
                    <div class="origin">
                        <div class="person">{{item.person}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                    <div class="content">{{item.content}}</div>

                    <div class="callback-wrapper" v-if="item.callback">
                        <div class="callback" v-for="(callback,index) in item.callback" :key="index">
                            <span class="name">{{callback.person}}：</span>&nbsp;
                            <span class="back">{{callback.content}}</span>
                        </div>
                        <div class="send">
                            <textarea class="comment"></textarea>
                            <i class="material-icons" @click="send">send</i>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="all-comment" @click="arrowFlag=!arrowFlag">
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
      }
    },
    data () {
      return {
        arrowFlag: false,
      }
    },
    methods: {
      send () {
        console.log(123)
      }
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
                width: 6rem;
                height: 3rem;
                border-radius: 10px;
                border: none;
                outline: none;
                background-color: $black;
                text-align: center;
                font-size: 14px;
                color: $white;

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

                .callback-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                    .callback {
                        margin: 10px 5px 0;
                        font-size: 12px;

                        .name {
                            color: $blue;
                        }

                        .back {
                            color: $grey;
                        }
                    }

                    .send {
                        position: relative;
                        width: 34rem;
                        align-self: self-end;
                        padding: 1rem;

                        .comment {
                            width: 100%;
                            height: 3rem;
                            border-radius: 10px;
                            outline: none;
                            box-sizing: border-box;
                            border: 1px solid $grey;
                            padding: 4px 2.8rem 4px 4px;
                        }

                        .material-icons {
                            position: absolute;
                            font-size: 20px;
                            right: 2rem;
                            top: 42%;
                            transform: translateY(-50%) rotate(-30deg);

                            &:active {
                                color: $orange;
                            }
                        }
                    }
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