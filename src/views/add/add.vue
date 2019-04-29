<template>
    <div class="add">
        <div class="classification">
            <div class="item" @click="deleteSelect(0)">
                <div class="icon">
                    <i class="material-icons">face</i>
                </div>
                <i class="name">学生自营</i>
            </div>
            <div class="item" @click="deleteSelect(1)">
                <div class="icon">
                    <i class="material-icons">location_city</i>
                </div>
                <i class="name">校网经营</i>
            </div>
            <div class="item" @click="deleteSelect(2)">
                <div class="icon">
                    <i class="material-icons">person_outline</i>
                </div>
                <i class="name">校会托售</i>
            </div>
            <div class="item" @click="deleteSelect(3)">
                <div class="icon">
                    <i class="material-icons">person_outline</i>
                </div>
                <i class="name">校园趣事</i>
            </div>
        </div>
        <div class="publish"></div>
        <goods-publish v-show="select.num!==3" :select="select" ref="goodsFather"></goods-publish>
        <news-publish v-show="select.num===3" :select="select" ref="newsFather"></news-publish>
    </div>
</template>

<script>
  export default {
    name: 'add',
    components: {
      GoodsPublish: () => import('@/components/main/GoodsPublish'),
      NewsPublish: () => import('@/components/main/NewsPublish')
    },
    data () {
      return {
        select: {
          name: ['学生自营', '校网经营', '校会托售', '校园趣事'],
          num: 0
        }
      }
    },
    methods: {
      deleteSelect (id) {
        this.select.num = id
        this.$refs.goodsFather.deleteAll()
        this.$refs.newsFather.deleteAll()
      },
    }
  }
</script>

<style scoped lang="scss">
    .add {
        overflow: hidden;

        .classification {
            border: 1px solid $grey;
            margin: 30px auto;
            width: 90%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 10px;
            padding: 20px 0 10px;
            position: relative;

            .item {
                @extend %block-center;
                flex-direction: column;

                .icon {
                    width: 50px;
                    height: 50px;
                    @extend %block-center;
                    border-radius: 50%;
                    margin-bottom: 8px;
                    cursor: default;

                    .material-icons {
                        color: $white;
                    }
                }

                .name {
                    font-style: normal;
                    color: $font-color-1;
                    font-size: 12px;
                    margin-bottom: 5px;
                }

                &:nth-of-type(1) .icon {
                    background-color: #ff737a;
                }

                &:nth-of-type(2) .icon {
                    background-color: #7ce5ff;
                }

                &:nth-of-type(3) .icon {
                    background-color: #ffbc7f;
                }

                &:nth-of-type(4) .icon {
                    background-color: #adb3fd;
                }

                &:active {
                    .icon {
                        @include click(50%, .5);
                    }

                    .name {
                        color: $black;
                    }
                }
            }

            &:before {
                content: '选择您的发布类型：';
                position: absolute;
                top: 0;
                left: 2rem;
                transform: translateY(-50%);
                background-color: #fff;
                font-size: 16px;
                padding: 0 10px;
                color: $grey;
            }
        }
    }
</style>