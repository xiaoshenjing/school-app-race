<template>
    <div class="loading">
        <footer v-if="loading"><i class="material-icons">settings_backup_restore</i>&nbsp;&nbsp;&nbsp;加载中 ...</footer>
        <footer v-else><span class="material-icons">sentiment_satisfied_alt</span>&nbsp;&nbsp;&nbsp;已全部加载</footer>
    </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      loading: {
        type: Boolean
      }
    }
  }
</script>

<style scoped lang="scss">
    .loading {
        padding-bottom: 20px;

        footer {
            @extend %block-center;
            font-size: 18px;

            i {
                transform: rotate(0);
                animation: loading 1s infinite steps(12);
                font-size: 28px;
            }

            @keyframes loading {
                0% {
                    transform: rotate(0);
                }
                100% {
                    transform: rotate(-360deg);
                }
            }
        }
    }
</style>