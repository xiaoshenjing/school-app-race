<template>
    <div class="publish-wrapper">
        <div class="title">{{select.name[select.num]}}:</div>
        <div class="form">
            <label class="form-item" for="title"><span>趣事标题：</span>
                <input class="text" type="text" id="title" v-model="form.title">
            </label>
            <clip ref="clip" @getFile="getFile" :btn="'上传展示图片'"></clip>
            <!-- 设置其 opacity 为 0 -->
            <input type="file" class="ImgPut" @change="imgPut($event)" accept="image/*">
            <!--富文本编辑器组件-->
            <div class="edit-wrapper">
                <quill-editor
                        class="edit"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @change="onEditorChange($event)"
                >
                </quill-editor>
            </div>

            <button class="submit" @click="publish">发布商品</button>
        </div>
    </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'

  export default {
    components: {
      quillEditor,
      Clip: () => import('@/components/main/Clip')
    },
    props: {
      select: {
        type: Object
      }
    },
    data () {
      return {
        form: {
          title: '',
          img_file: '',
          content: ''
        },
        // 在这里预定义输入内容
        editorOption: {
          modules: {
            toolbar: {
              container: [
                [{ 'size': ['small', 'large', 'huge'] }],
                [{ 'color': [] }],
                [{ 'align': [] }],
                ['image'],
              ],
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('.ImgPut').click()
                  } else {
                    this.quill.format('image', false)
                  }
                }
              }
            },
          }
        },
      }
    },
    methods: {
      getFile (val) {
        console.log(val)
        this.form.img_file = val
      },
      deleteAll () {
        // 清空表单
        for (let item in this.form) {
          this.form[item] = ''
        }

        this.$refs.clip.clear()

        // 清空富文本编辑器
        this.$refs.myQuillEditor.quill.container.children[0].innerHTML = ''
      },
      // 提交内容
      publish () {
        // check empty
        let empty = this.$checkEmpty(this.form)
        if (empty) {
          switch (empty) {
            case 'title':
              this.$store.commit('tip', { reason: '请输入趣事标题', color: 'red', update: new Date() })
              break
            case 'img_file':
              this.$store.commit('tip', { reason: '请上传并剪裁展示图片', color: 'red', update: new Date() })
              break
            case 'content':
              this.$store.commit('tip', { reason: '趣事内容不能为空', color: 'red', update: new Date() })
              break
          }
          return
        }

        // publish
        let form = new FormData()
        form.append('content', this.form.content)
        form.append('author', this.$store.state.loginMessage.student_id)
        form.append('title', this.form.title)
        form.append('time', this.$now())
        form.append('img_file', this.form.img_file)

        this.$http.post('/news', form)
          .then(res => {
            if (this.$jwt(res.data)) {
              this.deleteAll()
              this.$store.commit('tip', { reason: res.data.reason, color: 'green', update: new Date() })
            }
          })
      },
      // 获取富文本编辑器内容
      onEditorChange (event) {
        this.form.content = event.html
      },
      // 将富文本编辑器的内容上传至服务器，以 url 保存在 content 内
      imgPut (e) {
        let file = e.target.files[0]

        let form = new FormData()
        form.append('img', file)

        this.$http.post('/news/save_img', form)
          .then(res => {
            if (this.$jwt(res.data)) {
              let quill = this.$refs.myQuillEditor.quill

              // 获取光标所在位置
              let length = quill.getSelection().index
              // 插入图片，res.data.img 为服务器返回的图片链接地址
              quill.insertEmbed(length, 'image', res.data.img)
              // 调整光标到最后
              quill.setSelection(length + 1)
            }
          })
      }
    }
  }
</script>

<style scoped lang="scss">
    .publish-wrapper {
        width: 90%;
        margin: 20px auto;
        border: 1px solid $grey;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        padding: 20px 0 10px;
        position: relative;

        .title {
            position: absolute;
            top: 0;
            left: 2rem;
            z-index: 1;
            transform: translateY(-50%);
            background-color: #fff;
            font-size: 16px;
            padding: 0 10px;
            color: $grey;
        }

        .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 20px 20px;

            .form-item {
                color: $grey;
                font-size: 16px;
                margin: 20px 0;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                span {
                    white-space: nowrap;
                }

                .text {
                    width: 60%;
                    border-radius: 5px;
                    border: 1px solid $grey;
                    outline: none;
                    padding: 5px;
                    height: 2rem;
                }
            }

            .ImgPut {
                opacity: 0;
                height: 0;
            }

            .edit-wrapper {
                width: 300px;

                .edit {
                    width: 100%;
                }
            }

            .submit {
                margin-top: 20px;
                color: $white;
                align-self: flex-end;
                border-radius: 5px;
                border: none;
                outline: none;
                width: 10rem;
                height: 3rem;
                background-color: $black;

                &:active {
                    background-color: $grey;
                }
            }
        }
    }
</style>