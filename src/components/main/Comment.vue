<template>
    <div class="wrapper">
        <div class="post">
            <textarea class="comment"></textarea>
            <button class="submit">发布</button>
        </div>
        <transition name="comment" mode="out-in">
            <div v-if="arrowFlag" class="all">
                <div class="item" v-for="(item,index) in comment" :key="index">
                    <div class="origin">
                        <div class="person">{{item.person}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                    <div class="content">{{item.content}}</div>

                    <div class="callback-wrapper" v-if="item.callback">
                        <div class="callback" v-for="(callback,index) in item.callback" :key="index">
                            <span class="name">{{callback.person}}：</span>&nbsp;<span
                                class="back">{{callback.content}}</span>
                        </div>
                        <div class="callback-btn">回复</div>
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
        type: Array,
        required: true
      }
    },
    data () {
      return {
        arrowFlag: false
      }
    }
  }
</script>

<style scoped lang="scss">
    .wrapper {
        .post {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            padding: 10px;
            background-color: #fff;

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
            z-index: -1;
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

                    .callback-btn {
                        align-self: flex-end;
                        color: $orange;
                        padding: 10px 10px 0;
                        font-size: 14px;

                        &:active {
                            color: $blue;
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