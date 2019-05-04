<template>
    <div ref="form" :value="value" class="form">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        value: false
      }
    },
    updated () {
      this.validation()
    },
    methods: {
      // 表单规则验证
      validation () {
        let inputs = this.$refs.form.querySelectorAll('.input-wrapper')
        this.value = Array.from(inputs).every(item => {
          return Boolean(item.getAttribute('v-rule'))
        })
      },
      // 触发表单规则判断
      init () {
        let inputs = this.$refs.form.querySelectorAll('.input-wrapper')
        Array.from(inputs).map(item => {
          item.children[1].children[0].click()
        })
      }
    },
  }
</script>

<style scoped lang="scss">
    .form {
        width: 80%;
        margin: 20px auto;
        text-align: right;
    }
</style>