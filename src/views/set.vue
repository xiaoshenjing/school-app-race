<template>
    <div>
        <button @click="cancel">注销</button>
    </div>
</template>

<script>
  export default {
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

</style>