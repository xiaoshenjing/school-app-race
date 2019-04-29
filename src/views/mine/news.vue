<template>
    <div>
        <div class="banner">
            <img src="./images/news.jpg" alt="">
        </div>
        <news :newsData="news"></news>
        <loading :loading="false"></loading>
    </div>
</template>

<script>
  export default {
    components: {
      News: () => import('@/components/main/NewsList'),
      Loading: () => import('@/components/main/Loading'),
    },
    data () {
      return {
        personData: {},
        news: []
      }
    },
    methods: {
      init () {
        this.$store.commit('headerTitle', 'news')
        this.personData = this.$store.state.personMessage

        // get news
        this.$http.get('/news/user-news', {
          params: {
            ids: this.personData.news
          }
        })
          .then(res => {
            if (this.$jwt(res.data)) {
              this.news = res.data.news
            }
          })
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style scoped lang="scss">
    .banner {
        width: 100%;
        margin-bottom: 20px;

        img {
            width: 100%;
        }
    }
</style>