<template>
    <div class="person">
        <div class="avatar">
            <img :src="person_data.avatar" alt="" width="100%" height="100%">
        </div>
        <v-input v-model="form.id" :title="'学号'" :rules="idRules"></v-input>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        person_data: {},
        form: {
          id: ''
        },
        idRules: [
          v => Boolean(v) || '内容不能为空',
          v => v.length < 20 || '内容长度不得超过 20'
        ]
      }
    },
    components: {
      VInput: () => import('@/components/main/VInput')
    },
    methods: {
      getData () {
        this.$http.get('/users')
          .then(res => {
            if (this.$jwt(res.data)) {
              this.person_data = res.data.personData
            }
          })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
    .person {
        overflow: hidden;

        .avatar {
            width: 200px;
            height: 200px;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid $font-color-2;
            margin: 10px auto;
        }
    }
</style>