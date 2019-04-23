<template>
    <transition name="tip">
        <div class="tip" v-show="tip.flag">
            <div class="desc">111{{tip.content}}</div>
            <div class="cancel" @click="cancel">
                <i class="material-icons">clear</i>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    data () {
      return {
        tip: {
          flag: true,
          content: '',
          timer: '',
        }
      }
    },
    watch: {
      '$store.state.tip': function (newVal, oldVal) {
        this.tip.flag = true
        this.tip.content = newVal
        clearTimeout(this.tip.timer)
        this.tip.timer = setTimeout(() => {
          this.tip.flag = false
          this.tip.content = ''
        }, 3000)
      }
    },
    methods: {
      cancel () {
        this.tip.flag = false
        clearTimeout(this.tip.timer)
      }
    }
  }
</script>

<style scoped lang="scss">
    .tip {
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        z-index: 1001;
        background-color: #f00;
        border-radius: 10%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>