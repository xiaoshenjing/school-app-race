<template>
    <div class="main">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

  export default {
    name: 'VMain',
  }
</script>

<style scoped lang="scss">
    .main {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 68px;

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }

        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
    }
</style>