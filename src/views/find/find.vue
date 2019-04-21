<template>
    <div class="find">
        <swipe :carousel="carousel" :height="'150px'"></swipe>
        <divider
                :content="{title:'校园趣事',pattern:'☆-'}"
                :lineWidth="'34%'"
                :font="{fontSize:'16px',color:'#fb6d00'}"
        ></divider>
        <news :newsData="news"></news>
        <loading :loading="loading"></loading>
    </div>
</template>

<script>
  export default {
    name: 'find',
    components: {
      Loading: () => import('@/components/main/Loading'),
      Swipe: () => import('@/components/main/Swipe'),
      Divider: () => import('@/components/main/Divider'),
      News: () => import('@/components/main/NewsList')
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
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">

</style>