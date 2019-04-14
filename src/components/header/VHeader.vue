<template>
    <div class="header">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</template>

<script>
  export default {
    name: 'VHeader'
  }
</script>

<style scoped lang="scss">
    .header {
        width: 100%;
        background-color: rgba(0, 255, 0, .1);
        height: 40px;
        display: flex;

        .left, .right {
            width: 60px;
            height: 100%;
            background-color: #f00;
        }

        .center {
            width: 100%;
            height: 100%;
            background-color: #00f;
        }
    }
</style>