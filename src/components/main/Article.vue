<template>
    <div class="article">
        <div class="title">{{aData.title}}</div>
        <div class="person-wrapper">
            <div class="author">{{aData.author}}</div>
            <div class="time">{{aData.time}}</div>
            <div class="watches"><i class="material-icons">visibility</i>&nbsp;&nbsp;{{aData.watches}}</div>
        </div>
        <div class="content-wrapper">
            <div class="content" v-for="(item,index) in aData.content" :key="index">
                {{item}}
            </div>
        </div>
        <comment class="comment" :comment="aData.comment"></comment>
    </div>
</template>

<script>
  export default {
    name: 'Article',
    components: {
      Comment: () => import('@/components/main/Comment')
    },
    data () {
      return {
        aData: {}
      }
    },
    methods: {
      getData () {
        this.aData = this.$store.state.article
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
    .article {
        overflow: hidden;

        .title {
            text-align: center;
            font-size: 24px;
            color: $font-color-1;
            font-weight: 700;
            margin: 10px 0;
        }

        .person-wrapper {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 14px;
            color: $grey;

            .watches {
                display: flex;
                align-items: center;

                .material-icons {
                    font-size: 14px;
                }
            }
        }

        .content-wrapper {
            padding: 15px;

            .content {
                text-indent: 2em;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 10px;
            }
        }

    }
</style>