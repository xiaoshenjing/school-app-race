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
        type: Object,
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
                @include border-1px($black);

                .origin {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 5px;

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
                    color: $grey;
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