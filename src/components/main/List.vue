<template>
    <div class="list-wrapper">
        <div class="list" v-for="(item,index) in list" :key="index" @click="to(item.to)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    methods: {
      to (ad) {
        this.$router.push(ad)
      }
    }
  }
</script>

<style scoped lang="scss">
    .list-wrapper {
        .list {
            width: 100%;
            height: 6rem;
            background-color: $white;
            @extend %block-center;
            color: $grey;
            @include border-1px($font-color-2)
        }
    }
</style>