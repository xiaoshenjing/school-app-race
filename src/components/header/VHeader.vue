<template>
    <div class="header">
        <div class="left" @click="cancel">
            <i class="material-icons">hdr_weak</i>
        </div>
        <div class="center">
            <div class="search">
                <span class="text">搜索</span>
            </div>
        </div>
        <div class="right">
            <i class="material-icons">chat</i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'VHeader',
    methods: {
      cancel () {
        this.$store.commit('login', false)
      }
    }
  }
</script>

<style scoped lang="scss">
    .header {
        width: 100%;
        @include bgc($black);
        height: 40px;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        .left, .right {
            width: 60px;
            height: 100%;
            @extend %block-center;

            .material-icons {
                @include font-color($white);

                &:hover {
                    @include font-color($orange);
                }
            }
        }

        .center {
            width: 100%;
            height: 100%;
            @extend %block-center;

            .search {
                width: 80%;
                height: 70%;
                border-radius: 10px;
                background-color: #171721;
                @extend %block-center;

                .text {
                    @include font-color($grey);
                    font-size: 12px;
                }
            }
        }
    }
</style>