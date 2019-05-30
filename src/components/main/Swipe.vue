<template>
    <el-carousel :height="height">
        <el-carousel-item v-for="(item,index) in carousel" :key="index">
            <a :href="item.href"><img :src="'./carousel/'+item.src" alt="" width="100%" :height="height"></a>
        </el-carousel-item>
    </el-carousel>
</template>

<script>

  export default {
    name: 'Swipe',
    props: {
      carousel: {
        type: Array
      },
      height: {
        type: String
      }
    },
  }
</script>

<style scoped lang="scss">
    .el-carousel {
        margin-bottom: 10px;
    }
</style>