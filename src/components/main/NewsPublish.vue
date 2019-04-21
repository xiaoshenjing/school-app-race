<template>
    <div class="publish-wrapper">
        <div class="title">{{select.name[select.num]}}:</div>
        <div class="form">
            <label class="form-item" for="title"><span>趣事标题：</span>
                <input class="text" type="text" id="title" v-model="form.title">
            </label>
            <div class="form-src"><span class="text">上传封面图片</span><input accept="image/*" class="btn" type="file"></div>
            <!-- 设置其 opacity 为 0 -->
            <input type="file" class="imgPut" @change="imgPut($event)" accept="image/*">
            <!--富文本编辑器组件-->
            <div class="edit_container">
                <quill-editor
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
  import { quillEditor } from 'vue-quill-editor' //调用编辑器
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  export default {
    components: {
      quillEditor
    },
    props: {
      select: {
        type: Object
      }
    },
    data () {
      return {
        form: {
          author: '',
          title: '',
          time: '',
        },
        // 在这里预定义输入内容
        content: ``,
        editorOption: {
          modules: {
            toolbar: {
              container: [
                [{ 'size': ['small', 'large', 'huge'] }],
                ['bold'],
                [{ 'color': [] }],
                [{ 'align': [] }],
                ['image'],
              ],
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('.imgPut').click()
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
      // 获取富文本编辑器内容
      onEditorChange (event) {
        this.content = event.html
      },
      // 提交内容
      publish () {
        console.log(123)
        /*this.$http.post('/article', {
          content: this.content,
        })
          .then(res => {
            this.$check(res.data, '文章发布成功', () => {
              this.content = ''
              // 还原编辑器的内容
              this.$refs.myQuillEditor.quill.container.children[0].innerHTML = ''
            })
          })*/
      },
      // 将富文本编辑器的内容上传至服务器，以 url 保存在 content 内
      imgPut (e) {
        let file = e.target.files[0]

        let form = new FormData()
        form.append('img', file)

        /*this.$http.post('/img', form)
          .then(res => {
            this.$check(res.data, false, () => {
              let quill = this.$refs.myQuillEditor.quill;

              // 获取光标所在位置
              let length = quill.getSelection().index;
              // 插入图片，resres.data.imgUrl 为服务器返回的图片链接地址
              quill.insertEmbed(length, 'image', res.data.imgUrl);
              // 调整光标到最后
              quill.setSelection(length + 1)
            });
          })*/
      }
    }
  }
</script>

<style scoped lang="scss">
    .publish-wrapper {
        width: 90%;
        margin: 0 auto;
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

            .form-item {
                color: $grey;
                font-size: 16px;
                margin: 10px 0;
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

            %common { // form-src
                width: 100%;
                height: 3rem;
            }

            .form-src {
                position: relative;
                background-color: $font-color-1;
                border-radius: 5px;
                @extend %common;
                margin: 20px 0;

                .text {
                    @extend %common;
                    position: absolute;
                    top: 0;
                    left: 0;
                    @extend %block-center;
                    color: $white;
                    font-size: 16px;
                }

                .btn {
                    @extend %common;
                    opacity: 0;
                }
            }

            .imgPut {
                opacity: 0;
                height: 0;
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