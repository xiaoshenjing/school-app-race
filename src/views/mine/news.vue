<template>
    <div>
        <div class="banner">
            <img src="./images/news.jpg" alt="">
        </div>
        <news :newsData="personData.news"></news>
        <loading :loading="false"></loading>
    </div>
</template>

<script>
  export default {
    props: {
      personData: {
        type: Object
      }
    },
    components: {
      News: () => import('@/components/main/NewsList'),
      Loading: () => import('@/components/main/Loading'),
    },
    created () {
      this.$store.commit('headerTitle', 'news')
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