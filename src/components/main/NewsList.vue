<template>
    <div>
        <div
                class="news"
                v-for="(item,index) in newsData"
                :key="index"
                @click="article(item)"
        >
            <div class="title">
                <p><span>#{{item.author}}#</span> {{item.title}}</p>
            </div>
            <div class="img">
                <img :src="item.img_file" alt="" @click.prevent="" width="100%" height="100%">
            </div>
            <div class="popular">
                    <span>
                        {{item.time}}
                    </span>
                <div class="right">
                    <span><i class="material-icons">visibility</i>&nbsp;&nbsp;{{item.watch}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NewsList',
    props: {
      newsData: {
        type: Array
      }
    },
    methods: {
      article (data) {
        this.$store.commit('article', data)
        this.$router.push('/article')
      }
    },
  }
</script>

<style scoped lang="scss">
    .news {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 90%;
        height: auto;
        background-color: rgba(255, 255, 255, .8);
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;

        .title {
            margin-bottom: 20px;
            font-size: 16px;

            p {
                margin: 0;
                width: 300px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                span {
                    color: $blue;
                }
            }
        }

        .img {
            margin-bottom: 10px;
            padding: 10px;
            box-sizing: border-box;
            @include img(.9);
        }

        .popular {
            display: flex;
            justify-content: space-between;

            span {
                display: flex;
                align-items: center;
                margin-left: 5px;
                font-size: 14px;
                color: #888;

                i {
                    font-size: 14px;
                }
            }

            .right {
                display: flex;
                justify-content: space-between;

                span {
                    margin-right: 10px;
                    font-size: 12px;
                    line-height: 16px;

                    i {
                        margin-right: 5px;
                    }
                }
            }
        }

        &:active {
            @include click(10px, .3);
        }
    }
</style>