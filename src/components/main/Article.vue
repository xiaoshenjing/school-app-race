<template>
    <div class="article">
        <div class="title">{{aData.title}}</div>
        <div class="person-wrapper">
            <div class="author">{{aData.author}}</div>
            <div class="time">{{aData.time}}</div>
            <div class="watches"><i class="material-icons">visibility</i>&nbsp;&nbsp;{{aData.watch}}</div>
        </div>
        <div class="content-wrapper">
            <div class="ql-container ql-snow content">
                <div class="ql-editor" ref="content">
                </div>
            </div>
        </div>
        <comment class="comment" :id="{newsId:aData._id}" :comment="aData.comment"></comment>
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

        this.$nextTick(() => {
          this.$refs.content.innerHTML = this.aData.content
        })

        // watch
        this.$http.post('/news/watch', {
          newsId: this.aData._id
        })
      },
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
            font-size: 18px;
            color: $black;
            font-weight: lighter;
            margin: 20px 0;
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
        }

    }
</style>