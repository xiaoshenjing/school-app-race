<template>
    <div class="address-wrapper">
        <div class="add-wrapper">
            <textarea class="content" ref="address"></textarea>
            <button class="add-btn" @click="addAddress">添加地址</button>
        </div>
        <divider
                :content="{title:'地址管理',pattern:'+'}"
                :lineWidth="'35%'"
                :font="{color:'#ccc',fontSize:'16px'}"
        ></divider>
        <div class="address" v-for="(item,index) in personData.address" :key="index">
            <div class="content">{{item.pos}}</div>
            <div class="set">
                <div class="set-main" v-show="!item.main" @click="setAddress(index)">设为默认收获地址</div>
                <div class="main" v-show="item.main">默认收获地址</div>
                <div class="delete" @click="deleteAddress(index)">删除</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      personData: {
        type: Object
      }
    },
    components: {
      Divider: () => import('@/components/main/Divider')
    },
    methods: {
      addAddress () {
        this.personData.address.push({ pos: this.$refs.address.value, main: false })
      },
      deleteAddress (id) {
        this.personData.address.splice(id, 1)
      },
      setAddress (id) {
        this.personData.address.forEach(item => {
          item.main = false
        })
        this.personData.address[id].main = true
      }
    }
  }
</script>

<style scoped lang="scss">
    .address-wrapper {
        padding-bottom: 10px;

        .add-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            margin-bottom: 30px;

            .content {
                display: block;
                width: 90%;
                padding: 10px;
                margin: 10px auto;
                height: 10rem;
                border-radius: 10px;
                outline: none;
            }

            .add-btn {
                display: block;
                align-self: flex-end;
                width: 8rem;
                height: 3rem;
                border-radius: 5px;
                outline: none;
                border: none;
                background-color: $black;
                color: $white;
                margin-right: 8px;

                &:active {
                    background-color: $orange;
                }
            }
        }

        .address {
            padding: 10px;
            margin: 10px auto;
            border-radius: 10px;
            width: 90%;
            border: 1px solid $grey;
            font-size: 14px;

            .set {
                margin-top: 16px;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                .delete {
                    margin-left: 30px;
                }

                .main {
                    color: $orange;
                }

                .delete, .set-main {
                    color: $blue;

                    &:active {
                        color: $orange;
                    }
                }
            }
        }
    }
</style>