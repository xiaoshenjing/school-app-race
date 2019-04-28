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
        loading: false,
        news: [],
        carousel: [
          { href: '#', src: 'find1.png' },
          { href: '#', src: 'find2.png' },
          { href: '#', src: 'find3.png' },
        ]
      }
    }
    ,
    methods: {
      getData () {
        this.$http.get('/news')
          .then((res) => {
            if (this.$jwt(res.data)) {
              this.news = res.data.news
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