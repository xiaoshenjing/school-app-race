<template>
    <div class="publish-wrapper">
        <div class="title">{{select.name[select.num]}}:</div>
        <div class="form">
            <div class="img">
                <div class="preview" ref="preview" @click="deleteCanvas($event)"></div>
                <div class="tips" v-if="!form.imgFile[0]">注意：默认会截取图片中央为展示图片，上传后的图片再次点击删除</div>
                <div class="form-src">
                    <span class="text">点击上传图片</span>
                    <input accept="image/*" class="btn" type="file" @change="previewImg($event)">
                </div>
            </div>
            <label class="form-item" for="title"><span>商品名称：</span>
                <input class="text" type="text" id="title" v-model="form.title">
            </label>
            <label class="form-item" for="desc"><span>商品描述：</span>
                <textarea class="textarea" id="desc" v-model="form.desc"></textarea>
            </label>
            <label class="form-item" for="price"><span>商品价格：</span>
                <input class="text" type="number" id='price' v-model="form.price">
            </label>
            <label class="form-item" for="max_count"><span>商品数量：</span>
                <input class="text" type="number" id='max_count' v-model="form.max_count">
            </label>
            <button class="submit" @click="publish">发布商品</button>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      select: {
        type: Object
      }
    },
    data () {
      return {
        form: {
          desc: '',
          price: '',
          max_count: '',
          imgFile: [],
          title: '',
        },
      }
    },
    methods: {
      publish () {
        let form = new FormData()
        this.form.imgFile.forEach(item => {
          form.append('imgFile', item)
        })
        form.append('select', this.select.num)
        form.append('desc', this.form.desc)
        form.append('price', this.form.price)
        form.append('max_count', this.form.max_count)
        form.append('title', this.form.title)
        form.append('time', this.$now())

        this.$http.post('/goods/add', form, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then(res => {
            if (this.$jwt(res.data)) {
              if (res.data.result) {
                this.deleteAll()
                this.$store.commit('tip', { reason: res.data.reason, color: 'green', update: new Date() })
              } else {
                this.$store.commit('tip', { reason: res.data.reason, color: 'red', update: new Date() })
              }
            }
          })
      },
      deleteAll () {
        // 清空表单
        for (let item in this.form) {
          this.form[item] = ''
          this.form['imgFile'] = []
        }
        // 清空预览图片
        this.$refs.preview.innerHTML = ''
      },
      deleteCanvas (e) {
        this.$refs.preview.removeChild(e.target)
      },
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

        // 图片压缩与剪裁
        let canvas = document.createElement('canvas')
        let preview = this.$refs.preview
        let previewImage = new Image()
        let ctx = canvas.getContext('2d')

        reader.onload = function () {
          previewImage.src = this.result

          // ctx.drawImage() 是个异步操作，需要在图片 load 完成后再调用
          previewImage.onload = () => {
            canvas.width = 300
            canvas.height = 300

            let [width, height] = [previewImage.width, previewImage.height]
            let [sx, sy, swidth, sheight] = [0, 0, 0, 0]

            // 获取图片正中部位
            if (width >= height) {
              sy = 0
              sheight = height
              sx = (width - height) / 2
              swidth = sx + height
            } else {
              sx = 0
              swidth = width
              sy = (height - width) / 2
              sheight = sy + width
            }
            let arr = [sx, sy, swidth, sheight].map((item) => {
              return Math.floor(item)
            })

            // 绘制图片并在页面添加节点
            ctx.drawImage(previewImage, arr[0], arr[1], arr[2], arr[3], 0, 0, 300, 300)
            preview.appendChild(canvas)

            canvas.toBlob((data) => {
              console.log(data)
              that.form.imgFile.push(data)
            }, 'image/jpeg')
          }
        }
      }
    },
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
        padding: 20px 0 20px;
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

            .img {
                width: 300px;

                .preview {
                    width: 300px;
                }

                .tips {
                    padding: 10px 10px 0 10px;
                    font-size: 14px;
                    color: $danger;
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
            }

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

                .text, .textarea {
                    width: 60%;
                    border-radius: 5px;
                    border: 1px solid $grey;
                    outline: none;
                    padding: 5px;
                }

                .text {
                    height: 2rem;
                }

                .textarea {
                    height: 9rem;
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