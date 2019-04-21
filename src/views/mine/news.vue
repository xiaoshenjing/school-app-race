<template>
    <div>
        <news :newsData="personData.news"></news>
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
      News: () => import('@/components/main/NewsList')
    },
  }
</script>

<style scoped lang="scss">

</style>