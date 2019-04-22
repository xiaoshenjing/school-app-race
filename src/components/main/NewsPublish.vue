<template>
    <div class="publish-wrapper">
        <div class="title">{{select.name[select.num]}}:</div>
        <div class="form">
            <label class="form-item" for="title"><span>趣事标题：</span>
                <input class="text" type="text" id="title" v-model="form.title">
            </label>
            <div class="preview">
                <vueCropper
                        ref="cropper"
                        :img="previewImage.img"
                        :outputSize="previewImage.size"
                        :outputType="previewImage.outputType"
                        :autoCropWidth="previewImage.width"
                        :autoCropHeight="previewImage.height"
                        :autoCrop="true"
                        :fixed="true"
                        :canMove="false"
                ></vueCropper>
            </div>
            <div class="clip-wrapper">
                <button
                        class="clip"
                        @click="endClip"
                        :style="previewImage.img?'opacity: 1;':'opacity: 0;'"
                >确定剪裁
                </button>
                <div class="form-src">
                    <span class="text">上传展示图片</span>
                    <input accept="image/*" @change="previewImg($event)" class="btn" type="file">
                </div>
            </div>
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
          imgFile: '',
          content: ''
        },
        previewImage: {
          img: '',
          size: 1,
          outputType: 'jpeg',
          width: '250',
          height: '250',
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
      previewImg (e) {
        let file = e.target.files[0]
        let that = this
        if (!e || !window.FileReader) {
          alert('您的设备不支持图片预览功能，如需该功能请升级您的设备！')
        }
        let reader = new FileReader()
        if (file) {
          reader.readAsDataURL(file)
        }

        reader.onload = function () {
          that.previewImage.width = that.previewImage.height = '250'
          that.previewImage.img = this.result
        }
      },
      endClip () {
        // 获取截图的blob数据
        this.$refs.cropper.getCropBlob((data) => {
          this.form.imgFile = data

          this.previewImage.width = this.previewImage.height = '300'
        })

        // 获取截图的base64 数据
        this.$refs.cropper.getCropData((data) => {
          this.previewImage.img = data
        })
      },
      deleteAll () {
        // 清空表单
        for (let item in this.form) {
          if (item !== 'imgFile') {
            this.form[item] = ''
          }
        }
        // 清空富文本编辑器
        this.$refs.myQuillEditor.quill.container.children[0].innerHTML = ''
      },
      // 提交内容
      publish () {
        console.log(this.form)
        /*this.$http.post('/article', {
          content: this.form.content,
        })
          .then(res => {
            this.$check(res.data, '文章发布成功', () => {
              this.form.content = ''
              // 还原编辑器的内容
              this.$refs.myQuillEditor.quill.container.children[0].innerHTML = ''
            })
          })*/
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

            .preview {
                width: 300px;
                height: 300px;
            }

            .clip-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 20px 0;

                %common { // form-src
                    width: 40%;
                    height: 3rem;
                }

                .clip {
                    @extend %common;
                    background-color: $font-color-1;
                    border-radius: 5px;
                    color: $white;
                    font-size: 14px;
                    border: none;
                    outline: none;

                    &:active {
                        background-color: $grey;
                    }
                }

                .form-src {
                    position: relative;
                    background-color: $font-color-1;
                    border-radius: 5px;
                    @extend %common;


                    .text {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        @extend %block-center;
                        color: $white;
                        font-size: 14px;
                    }

                    .btn {
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                    }

                    &:active {
                        background-color: $grey;
                    }
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