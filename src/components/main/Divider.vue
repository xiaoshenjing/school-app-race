<template>
    <div class="divider">
        <div class="line" :style="'width:'+ lineWidth +';'">
            <span v-for="n in 30" :key="n">{{content.pattern}}</span>
        </div>
        <div :style="font">{{content.title}}</div>
        <div class="line" :style="'width:'+ lineWidth +';'">
            <span v-for="n in 30" :key="n">{{content.pattern}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Divider',
    props: {
      content: {
        type: Object
      },
      lineWidth: {
        type: String,
        default: '40%'
      },
      font: {
        type: Object,
        default () {
          return {
            color: '#555',
            fontSize: '14px'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .divider {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 15px;

        .line {
            overflow: hidden;
            font-size: 10px;
            color: #ccc;
            white-space: nowrap;

            &:last-of-type {
                direction: rtl;
            }
        }
    }
</style>