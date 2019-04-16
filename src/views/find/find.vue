<template>
    <div class="find">
        <swipe :carousel="carousel" :height="'150px'"></swipe>
        <divider
                :content="{title:'校园趣事',pattern:'☆-'}"
                :lineWidth="'34%'"
                :font="{fontSize:'16px',color:'#fb6d00'}"
        ></divider>

        <div
                class="news"
                v-for="(item,index) in news"
                :key="index"
        >
            <div class="title">
                <p><span>#{{item.title}}#</span> {{item.content}}</p>
            </div>
            <div class="img">
                <img :src="item.src" alt="" @click.prevent="" width="100%" height="100%">
            </div>
            <div class="popular">
                    <span>
                        {{item.time}}
                    </span>
                <div class="right">
                    <span><i class="material-icons">visibility</i>&nbsp;&nbsp;{{item.watches}}</span>
                </div>
            </div>
        </div>
        <loading :loading="loading"></loading>
    </div>
</template>

<script>
  export default {
    name: 'find',
    components: {
      Loading: () => import('@/components/main/Loading'),
      Swipe: () => import('@/components/main/Swipe'),
      Divider: () => import('@/components/main/Divider')
    },
    data () {
      return {
        loading: true,
        news: [],
        carousel: []
      }
    }
    ,
    methods: {
      getData () {
        this.$api.post('/find')
          .then((res) => {
            if (res.status === 200) {
              this.news = res.data.news
              this.carousel = res.data.carousel
            }
          })
      }
    }
    ,
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
    .find {
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
                @include img(.4);
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
    }
</style>