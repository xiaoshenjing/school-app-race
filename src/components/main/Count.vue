<template>
    <div class="count">
        <i class="material-icons" v-show="good.count>0" @click="decrease">remove_circle_outline</i>
        <span class="num" v-show="good.count>0">{{good.count}}</span>
        <i class="material-icons" @click="add">add_circle_outline</i>
    </div>
</template>

<script>
  export default {
    name: 'count',
    props: {
      good: {
        type: Object
      }
    },
    methods: {
      add () {
        if (this.good.count < this.good.max_count) {
          this.good.count++
        } else {
          alert('已达到库存上限')
        }
      },
      decrease () {
        if (this.good.count > 0) {
          this.good.count--
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .count {
        width: 90px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .material-icons {
            font-size: 30px;
            color: $grey;

            &:active {
                color: $orange;
            }
        }

        .num {
            font-size: 18px;
            color: $grey;
            width: 30px;
            text-align: center;
        }
    }
</style>