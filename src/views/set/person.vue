<template>
    <div class="person">
        <div class="avatar" @click="openAvatar">
            <img :src="person_data.avatar" alt="" width="100%" height="100%">
        </div>
        <v-form ref="form">
            <v-input v-model="form.student_id" :setting="student_id"></v-input>
            <v-input v-model="form.password" :setting="password"></v-input>
            <v-input v-model="form.money" :setting="money"></v-input>
            <button @click="submit" class="submit">确定</button>
        </v-form>
        <transition name="avatar" mode="out-in">
            <div class="avatar-wrapper" @click.self="hideAvatar" v-show="avatar_flag">
                <div class="avatar">
                    <div class="close" @click="hideAvatar"></div>
                    <clip :btn="'上传个人头像'" @getFile="getFile" @getPreviewFile="getPreviewFile"></clip>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    components: {
      VInput: () => import('@/components/main/VInput'),
      VForm: () => import('@/components/main/VForm'),
      Clip: () => import('@/components/main/Clip')
    },
    data () {
      return {
        person_data: {},
        avatar_flag: false,
        form: {
          avatar: '',
          student_id: '',
          password: '',
          money: 0
        },

        student_id: {
          title: '学号',
          readonly: true,
          rules: [
            v => Boolean(v) || '内容不能为空',
            v => v.length < 20 || '内容长度不得超过 20',
          ],
        },

        password: {
          title: '密码',
          type: 'password',
          rules: [
            v => Boolean(v) || '密码不能为空',
            v => v.length < 16 || '密码长度不得超过 20',
            v => v.length > 5 || '密码长度不得少于 6',
          ]
        },

        money: {
          title: '账户金额',
          rules: [
            v => v !== '' || '金额不能为空',
            v => /^[0-9]+(\.[0-9]{1,2})?$/.test(v) || '金额格式错误，仅允许数字',
          ]
        }
      }
    },
    methods: {
      openAvatar () {
        this.avatar_flag = true
      },
      hideAvatar () {
        this.avatar_flag = false
      },
      getData () {
        this.$http.get('/users')
          .then(res => {
            if (this.$jwt(res.data)) {
              this.person_data = res.data.personData
              this.form.student_id = this.person_data.student_id
              this.form.password = this.person_data.password
              this.form.money = this.person_data.money
            }
          })
      },
      getFile (file) {
        this.form.avatar = file
      },
      getPreviewFile (file) {
        this.person_data.avatar = file
      },
      submit () {
        this.$refs.form.init()
        if (this.$refs.form.value) {
          let form = new FormData()
          form.append('avatar', this.form.avatar)
          form.append('student_id', this.form.student_id)
          form.append('password', this.form.password)
          form.append('money', this.form.money)

          this.$http.post('/users/set-person', form)
            .then(res => {
              if (this.$jwt(res.data)) {
                this.$store.commit('tip', { reason: res.data.reason, color: 'green', update: new Date() })
              }
            })
        }
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

        .form {
            margin-top: 30px;

            .submit {
                width: 6rem;
                height: 3rem;
                border: 1px solid $font-color-1;
                border-radius: 10px;
                color: $font-color-1;
                background-color: #fff;
                outline: none;

                &:active {
                    background-color: $grey;
                }
            }
        }

        .avatar-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 20;
            background-color: rgba(0, 0, 0, .1);
            width: 100%;
            height: 100%;

            .avatar {
                position: fixed;
                width: auto;
                height: auto;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, .2);
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                .close {
                    width: 30px;
                    height: 30px;
                    position: relative;
                    margin-bottom: 10px;

                    &:active {
                        &:after, &:before {
                            height: 30px;
                        }
                    }

                    &:after, &:before {
                        content: '';
                        width: 2px;
                        height: 25px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        background-color: $grey;
                    }

                    &:before {
                        transform: translate(-50%, -50%) rotate(45deg);
                    }

                    &:after {
                        transform: translate(-50%, -50%) rotate(-45deg);
                    }
                }
            }

            &.avatar-enter-active, &.avatar-leave-active {
                transition: opacity .5s;
            }

            &.avatar-enter, &.avatar-leave-to {
                opacity: 0;
            }
        }
    }
</style>