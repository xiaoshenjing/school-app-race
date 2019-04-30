<template>
    <div class="set">
        <list :list="list"></list>
        <button class="cancel" @click="cancel">注销</button>
    </div>
</template>

<script>
  export default {
    components: {
      List: () => import('@/components/main/List')
    },
    data () {
      return {
        list: [
          { name: '个人信息', to: '/set/person' }
        ]
      }
    },
    methods: {
      cancel () {
        this.$router.push('/home')
        this.$store.commit('login', false)
        this.$store.commit('token', '')
        this.$store.commit('tip', { reason: '注销成功', color: 'green', update: new Date() })
      }
    }
  }
</script>

<style scoped lang="scss">
    .set {
        overflow: hidden;

        .cancel {
            display: block;
            width: 80%;
            margin: 20px auto;
            text-align: center;
            font-size: 18px;
            height: 4rem;
            line-height: 3.5rem;
            background-color: $black;
            color: $white;
            border: none;
            outline: none;
            border-radius: 5px;

            &:active {
                background-color: $orange;
            }
        }
    }
</style>