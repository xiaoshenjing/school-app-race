<template>
    <div>
        <button @click="cancel">注销</button>
    </div>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.$store.commit('login', false)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>