<template>
    <div class="article">
        <div class="title">{{aData.title}}</div>
        <div class="author">{{aData.author}}</div>
        <div class="time">{{aData.time}}</div>
        <div class="content">{{aData.content}}</div>
        <div class="watches"><i class="material-icons">visibility</i>&nbsp;&nbsp;{{aData.watches}}</div>
        <comment :comment="aData.comment"></comment>
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
    }
</style>